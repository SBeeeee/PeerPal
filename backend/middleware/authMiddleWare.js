import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';
import { blacklistToken } from '../models/blacklisttoken.js';

export const auth=async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[ 1 ];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        } 
        const isBlacklisted = await blacklistToken.find({ token });
         if (isBlacklisted.length) {
            return res.status(401).json({ message: 'Unauthorized blacklist' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}