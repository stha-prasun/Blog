import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-base-100 border-b border-base-300">
      {/* Logo */}
      <div className="flex items-center space-x-2 font-bold text-lg">
        <span className="text-blue-600">∞</span>
        <span>Blogs</span>
      </div>

      {/* Links */}
      <div className="flex space-x-6">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>

      {/* Dark Mode Toggle */}
      <div>
        <label className="swap swap-rotate cursor-pointer">
          {/* Hidden checkbox */}
          <input type="checkbox" />

          {/* Sun icon */}
          <Sun className="swap-on w-6 h-6 text-yellow-500" />

          {/* Moon icon */}
          <Moon className="swap-off w-6 h-6 text-blue-500" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
