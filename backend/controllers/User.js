import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register=async (req, res) => {
    try{
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
      }

    const user= await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hash });

    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token);
    delete newUser._doc.password;  //DELETING THE PASSWORD ATTRIBUTE SO THAT WHEN WE SEND WE DONT SEND THE PASSWORD 

    res.send({ token, newUser });
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

export const login=async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        .select('+password'); //This overrides the select: false for just this query and includes the password in the result.
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        delete user._doc.password;

        res.cookie('token', token);

        res.send({ token, user });
    } catch (error) {

        res.status(500).json({ message: error.message });
    }


}