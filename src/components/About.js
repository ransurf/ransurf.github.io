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
    <img src={bgImage} alt="Outrun background" className="imgDarken absolute w-full"/>
    <p>Loading..</p>
    </div>
  return (
    <main className="relative">
      <img src={bgImage} alt="Outrun background" className="imgDarken absolute w-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-night-100 rounded-lg shadow-2xl lg:flex p-20">
          <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-80 mr-12" alt={author.name}/>
          <div className="text-lg flex flex-col justify-center text-white">
            <h1 className="text-code text-6xl mb-4 ">
              Howdy! I'm {" "} 
              <span>{author.name}.</span>
            </h1>
            <div className="prose text-white"></div>
                <BlockContent blocks={author.bio} projectId="rbuymwld" dataset="production" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default About