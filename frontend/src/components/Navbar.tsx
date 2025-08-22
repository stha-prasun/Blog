const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
      <div className="flex items-center space-x-2 font-bold text-lg">
        <span className="text-blue-600">∞</span>
        <span>enjooy</span>
      </div>
      <div className="flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          Blog
        </a>
        <div className="relative group">
          <button className="hover:text-blue-600">Service</button>
        </div>
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </div>
      <div className="flex space-x-2">
        <button className="px-4 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 text-sm">
          Sign in
        </button>
        <button className="px-4 py-1 rounded bg-blue-600 text-white text-sm font-semibold">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
