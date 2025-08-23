import Navbar from "./Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <h1 className="text-4xl font-bold mb-4">
          Exploring the Future of Web Development
        </h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="mr-2">✍️ By John Doe</span>
          <span>•</span>
          <span className="ml-2">August 23, 2025</span>
        </div>

        {/* Blog Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop"
          alt="Blog header"
          className="w-full h-72 object-cover rounded-lg mb-8 shadow-md"
        />

        {/* Blog Content */}
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Web development is evolving at a rapid pace with new frameworks,
            libraries, and tools being introduced every year. Developers are
            constantly adapting to keep up with modern trends.
          </p>
          <p>
            In this article, we’ll take a look at how frameworks like{" "}
            <span className="font-semibold text-blue-600">React</span>,{" "}
            <span className="font-semibold text-green-600">Next.js</span>, and{" "}
            <span className="font-semibold text-purple-600">Node.js</span> are
            shaping the future of the web.
          </p>
          <h2>The Rise of Component-Driven Development</h2>
          <p>
            One of the most significant changes in web development has been the
            adoption of component-driven design. This approach allows developers
            to build reusable, modular components that make applications more
            scalable and maintainable.
          </p>
          <h2>What’s Next?</h2>
          <p>
            With AI-assisted coding, serverless architecture, and edge computing
            becoming more mainstream, the future of web development looks more
            exciting than ever. Developers who stay updated and adapt to these
            changes will thrive in this dynamic industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
