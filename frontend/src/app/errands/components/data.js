import axios from 'axios';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
import { Clock, Filter, MapPin, Package, Search, ShoppingCart, Truck, Home } from "lucide-react"


export const fetchdata = async (setLoading) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/task/alltasks`);
    const data = await res.data;
    return data; // Return the fetched data
  } catch (error) {
    console.error(error);
    return {}; // Return empty object in case of error to prevent breaking
  } 
};


















export const errands = [
    {
      id: 1,
      title: "Grocery Shopping",
      description: "Need someone to pick up groceries from Whole Foods. List provided. Approximately 15 items.",
      price: 25,
      distance: "2.3 miles",
      category: "Shopping",
      icon: ShoppingCart,
      postedAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Package Pickup",
      description: "Need someone to pick up a package from the post office and deliver it to my home.",
      price: 15,
      distance: "1.5 miles",
      category: "Delivery",
      icon: Package,
      postedAt: "3 hours ago",
    },
    {
      id: 3,
      title: "Furniture Assembly",
      description: "Need help assembling a bookshelf from IKEA. All tools and parts provided.",
      price: 40,
      distance: "3.2 miles",
      category: "Home",
      icon: Home,
      postedAt: "5 hours ago",
    },
    {
      id: 4,
      title: "Airport Pickup",
      description: "Need a ride from JFK airport to downtown. One person with two suitcases.",
      price: 50,
      distance: "12.7 miles",
      category: "Transport",
      icon: Truck,
      postedAt: "1 day ago",
    },
    {
      id: 5,
      title: "Dog Walking",
      description: "Need someone to walk my dog for 30 minutes. Friendly golden retriever.",
      price: 15,
      distance: "0.8 miles",
      category: "Pets",
      icon: Home,
      postedAt: "4 hours ago",
    },
    {
      id: 6,
      title: "Dry Cleaning Pickup",
      description: "Need someone to pick up my dry cleaning and deliver it to my apartment.",
      price: 12,
      distance: "1.2 miles",
      category: "Delivery",
      icon: Package,
      postedAt: "6 hours ago",
    },
    {
      id: 7,
      title: "Grocery Delivery",
      description: "Need groceries delivered from Trader Joe's. List will be provided.",
      price: 20,
      distance: "2.5 miles",
      category: "Shopping",
      icon: ShoppingCart,
      postedAt: "3 hours ago",
    },
    {
      id: 8,
      title: "Moving Help",
      description: "Need help moving a few furniture items from one apartment to another in the same building.",
      price: 45,
      distance: "1.8 miles",
      category: "Home",
      icon: Truck,
      postedAt: "1 day ago",
    },
  ]

export const myTasks = [
  {
    id: 1,
    title: "Web Development Project",
    description: "Need help building a React.js app with Tailwind CSS. The design is ready, and the main features are defined.",
    price: 100,
    distance: "N/A",
    category: "Development",
    icon: Search,
    postedAt: "1 hour ago",
    status: "not accepted",
  },
  {
    id: 2,
    title: "Design a Logo for ADGVIT Website",
    description: "I need a new logo design for the ADGVIT website. Requirements: minimalist, modern, and fits the existing color scheme.",
    price: 50,
    distance: "N/A",
    category: "Design",
    icon: Filter,
    postedAt: "2 hours ago",
    status: "in progress",
  },
  {
    id: 3,
    title: "Setup Firebase Authentication",
    description: "Need someone to set up Firebase authentication for my Next.js project, including email and Google login.",
    price: 30,
    distance: "N/A",
    category: "Development",
    icon: Package,
    postedAt: "3 hours ago",
    status: "not accepted",
  },
  {
    id: 4,
    title: "Create a Dashboard for My React App",
    description: "Need a dashboard UI with a user-friendly layout to display data and charts for my React app.",
    price: 40,
    distance: "N/A",
    category: "Development",
    icon: Home,
    postedAt: "5 hours ago",
    status: "in progress",
  },
  {
    id: 5,
    title: "Fix CSS Issues on ADGVIT Website",
    description: "Some CSS issues need fixing on the ADGVIT website. It's not responsive on mobile devices, and some elements are misaligned.",
    price: 25,
    distance: "N/A",
    category: "Design",
    icon: ShoppingCart,
    postedAt: "1 day ago",
    status: "not accepted",
  },
  {
    id: 6,
    title: "Debug Next.js Project",
    description: "There is an issue with my Next.js project, and I'm unable to resolve it. Need help debugging it and finding the root cause.",
    price: 35,
    distance: "N/A",
    category: "Development",
    icon: Truck,
    postedAt: "6 hours ago",
    status: "in progress",
  },
  {
    id: 7,
    title: "Improve Performance of React App",
    description: "The performance of my React app could be improved, especially during page load. Looking for suggestions and optimizations.",
    price: 45,
    distance: "N/A",
    category: "Development",
    icon: Clock,
    postedAt: "4 hours ago",
    status: "not accepted",
  },
  {
    id: 8,
    title: "Update ADGVIT Website Content",
    description: "Need someone to update the content on the ADGVIT website, including text and images.",
    price: 30,
    distance: "N/A",
    category: "Design",
    icon: MapPin,
    postedAt: "2 hours ago",
    status: "not accepted",
  },
];
