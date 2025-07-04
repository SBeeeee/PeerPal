import Navbar from "./components/Navbar";
import "./globals.css";
import UpperNav from "./components/UpperNav";
import { AuthProvider } from "./context/UserContext";

export const metadata = {
  title: "HelpBuddy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-zinc-900" lang="en">
      <body >
        <AuthProvider>
        <UpperNav/>
      <Navbar/>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
