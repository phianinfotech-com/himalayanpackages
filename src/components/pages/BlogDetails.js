import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Parser } from "html-to-react";
import moment from "moment";
import { Link } from "react-router-dom";
export default function BlogDetails() {
  const navigate = useNavigate();

  // const [inputs, setInputs] = useState([]);

  // const {slug} = useParams();

  // useEffect(() => {
  //     getBlog();
  // }, []);

  // function getBlog() {
  //     axios.get(`http://localhost/himalayan/api-fetch-single.php/${slug}`).then(function(response) {
  //         console.log(response.data);
  //         setInputs(response.data);
  //     });
  // }
  // State to store the fetched data
  const [data, setData] = useState(null);

  // Function to fetch data using the slug from the PHP API
  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost/himalayan/api-fetch-single.php?slug=${slug}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  // Fetch data using slug from the URL parameter when the component mounts
  useEffect(() => {
    // Get the slug from the URL
    const urlSlug = window.location.pathname.split("/blog/").pop();

    const slugWithoutTrailingSlash = urlSlug.replace(/\/$/, "");

    // replace pop
    // remove
    // slice

    fetchDataBySlug(slugWithoutTrailingSlash);
  }, []);

  return (
    <div>
      <div className="relative">
        <section className="bg-[url('https://images.thrillophilia.com/image/upload/s--_XQ_pqQH--/c_fill,g_auto,h_642,w_1400/dpr_1.0/v1/collections/images/015/120/655/original/1655472205_shutterstock_1141239563.jpg.jpg')] w-full h-96 bg-cover bg-center ">
          <Navbar />

          <h2 className="absolute text-3xl text-white bottom-20 left-40 -translate-x-1/2 border-l-4 border-primary font-semibold pl-4"></h2>
        </section>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            <div className="py-8 px-4 lg:w-3/4">
              {data ? (
                <div className="h-full flex items-start">
                  <div className="flex-grow pl-6 p-4">
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                      {data.BName}
                    </h1>
                    <a className="inline-flex items-center ">
                      <span className="flex-grow flex flex-row pl-3">
                        <span className="title-font font-medium text-gray-900 ">
                          By {data.BlogBy}
                        </span>

                        <span className="leading-relaxed mb-5 ml-5">
                          {moment(data.BDate).format("MMMM Do, YYYY")}
                        </span>
                      </span>
                    </a>
                    <img
                      src={data.image}
                      alt={data.BAlt}
                      className="w-full  shadow-xl border-solid border-2 rounded-2xl mb-10"
                    />

                    {Parser().parse(data.content)}
                  </div>
                </div>
              ) : (
                <p>No data fetched yet.</p>
              )}
            </div>

            <div className="py-8 px-4 lg:w-1/4 ">
              <div className="h-full flex items-start border-solid border-2 border-base-200 p-5 ">
                <div className="flex-grow">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Search Blog</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </h2>
                  <h1 className="title-font text-xl font-medium pt-5 text-gray-900 mb-3">
                    Popular Blog
                  </h1>
                  {blogPosts.map((post) => (
                    <a className="inline-flex items-center">
                      <div className="card w-auto bg-base-100 shadow-xl m-2">
                        <figure>
                          <img src={post.image} alt={post.BAlt} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{post.CName}</h2>

                          <Link
                            to={`/blog/${post.slug}/`}
                            className="text-primary inline-flex items-center md:mb-2 lg:mb-0"
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
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
