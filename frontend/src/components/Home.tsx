const BLOG_IMG =
  "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type Blog = {
  category: string;
  title: string;
  desc: string;
};

type SidebarPost = {
  date: string;
  title: string;
};

const mainBlogs: Blog[] = [
  {
    category: "Health & Nutrition",
    title: "Wanderlust Unleashed: Top Hidden Gems You Must Visit This Year",
    desc: "Discover unique, off-the-radar destinations around the world that offer breathtaking scenery and unforgettable experiences.",
  },
  {
    category: "Sustainability",
    title: "Travel Bucket List: 25 Destinations for Every Adventurer",
    desc: "Explore a curated list of must-visit places for every kind of traveler, whether you love mountains, beaches, or cultural landmarks.",
  },
  {
    category: "Cultural Insights",
    title: "How to Travel Like a Local: Insider Tips for Authentic Experiences",
    desc: "Learn how to immerse yourself in the culture of each place you visit by following these insider tips. From dining at local spots to embracing ...",
  },
];

const featuredPosts: SidebarPost[] = [
  {
    date: "August 7, 2017",
    title: "Top Hidden Gems: Must-Visit Spots This Year",
  },
  {
    date: "March 23, 2013",
    title: "Bucket List: 25 Adventures for Every Traveler",
  },
  {
    date: "May 31, 2015",
    title: "Travel Like a Local: Tips for Authentic Experiences",
  },
];

const latestPosts: SidebarPost[] = [
  { date: "October 24, 2024", title: "The Ordinary:" },
];

const Home = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* Navbar */}
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
          {/* Dropdown can be added here if required */}
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

    {/* Header */}
    <section className="max-w-2xl mx-auto py-14 text-center">
      <div className="text-gray-500">Blog</div>
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
        Discover our latest news
      </h1>
      <p className="text-gray-600 mb-6">
        Discover the achievements that set us apart. From groundbreaking
        projects to industry accolades, we take pride in our accomplishments.
      </p>
    </section>

    {/* Blog and Sidebar Section */}
    <main className="max-w-7xl mx-auto px-6 lg:flex gap-12">
      {/* Blogs */}
      <section className="flex-1">
        <h2 className="text-xl font-semibold mb-6">
          Whiteboards are remarkable.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainBlogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm rounded-2xl overflow-hidden"
            >
              <img
                src={BLOG_IMG}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 pb-6">
                <div className="bg-blue-50 text-blue-700 font-medium text-xs px-2 py-0.5 rounded-full inline-block mb-2">
                  {blog.category}
                </div>
                <div className="font-semibold mb-1">{blog.title}</div>
                <div className="text-gray-600 text-sm">{blog.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar */}
      <aside className="w-full max-w-xs mt-12 lg:mt-0">
        {/* Featured */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold border-b pb-2 mb-6">Featured</h3>
          {featuredPosts.map((post, idx) => (
            <div key={idx} className="flex items-center mb-6">
              <img
                src={BLOG_IMG}
                alt={post.title}
                className="w-14 h-14 object-cover rounded-lg mr-4"
              />
              <div>
                <div className="text-xs text-gray-500">{post.date}</div>
                <div className="text-sm font-medium text-gray-700">
                  {post.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Latest */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-6">Latest</h3>
          {latestPosts.map((post, idx) => (
            <div key={idx} className="flex items-center mb-6">
              <img
                src={BLOG_IMG}
                alt={post.title}
                className="w-14 h-14 object-cover rounded-lg mr-4"
              />
              <div>
                <div className="text-xs text-gray-500">{post.date}</div>
                <div className="text-sm font-medium text-gray-700">
                  {post.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </main>
  </div>
);

export default Home;
