import React from 'react'
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../client.js'
import '../App.css'
//import image
import bgImage from "../assets/bgHome.png";

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

function About() {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      "authorImage": image.asset->url,
      bio
    }`).then((data) => setAuthor(data[0]))
    .catch((err) => console.log(err))
  }, [])

  if (!author) return <div>
    <img src={bgImage} alt="Outrun background" className="object-cover w-full h-full"/>
    <p>Loading..</p>
    </div>
  return (
    <main className=" bg-night-200">
      <img src={bgImage} alt="Outrun background" className="absolute object-cover w-full h-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-night-100 rounded-lg shadow-2xl lg:flex p-4 sm:p-20">
          <img src={urlFor(author.authorImage).url()} className="rounded w-50 h-50 sm:w-50 sm:w-64 sm:h-80 mr-0 md:mr-12 self-center" alt={author.name}/>
          <div className="text-lg flex flex-col justify-center text-white">
            <h1 className="text-code text-l sm:text-6xl  mb-4 py-4 sm:py-0 md:py-8">
              Howdy! I'm {" "} 
              <span>{author.name}.</span>
            </h1>
            <div className="prose text-white"></div>
                <BlockContent className="text-sm sm:text-lg" blocks={author.bio} projectId="rbuymwld" dataset="production" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default About