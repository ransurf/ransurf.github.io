import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import sanityClient from "../client.js";

function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data));
  });

  return (
    <main className="bg-night-200 min-h-screen p-4 sm:p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-code text-white">Blog Posts</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 text-white text-code mt-1">
          A collection of my thoughts and experiences!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug border-purple-400 grow"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="absolute w-full h-full object-cover rounded-r"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-white bg-night-200 text-lg font-bold px-3 py-3 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Post;
