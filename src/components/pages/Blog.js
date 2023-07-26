import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const MAX_LENGTH = 250;

  useEffect(() => {
    // Fetch blog data from PHP API using Axios
    axios
      .get("http://localhost/himalayan/API_fetch_all_blog.php")
      .then((response) => {
        setBlogPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  return (
    <>
      <div className="relative">
        <section className="bg-[url('https://images.thrillophilia.com/image/upload/s--_XQ_pqQH--/c_fill,g_auto,h_642,w_1400/dpr_1.0/v1/collections/images/015/120/655/original/1655472205_shutterstock_1141239563.jpg.jpg')] w-full h-96 bg-cover bg-center ">
          <Navbar />

          <h2 className="absolute text-3xl text-white bottom-20 left-40 -translate-x-1/2 border-l-4 border-primary font-semibold pl-4">
            All Blogs
          </h2>
        </section>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex-wrap -m-4 grid md:grid-cols-3 md:gap-3 ">
            {blogPosts.map((post) => (
              <div key={post.BID} className="md:w-full">
                <div className="p-4 ">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={post.image}
                      alt={post.BAlt}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {post.CName}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.BName}
                      </h1>

                      {/* parse<div className="leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: post.content }}/> */}

                      {Parser().parse(post.Description)}

                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={`/blog/${post.slug}/`}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
