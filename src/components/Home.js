import React from "react";
import { useEffect, useState } from "react";

import bgImage from "../assets/bgHome.png";

function Home() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [words, setWords] = useState(['Programmer', 'YouTuber', 'Student', 'Designer']);

  // typeWriter, source from https://levelup.gitconnected.com/typing-effect-in-react-56697def0473
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <main className="imgDarken">
      <img
        src={bgImage}
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex flex-col min-h-screen  md:pt-64 lg:pt-90 px-8">
        <h1 className="text-6l text-white font-bold text-code lg:leading-snug home-name self-center">
          John Mavrick
        </h1>
        <h2 className="text-[30px] text-white text-code-thin lg:leading-snug self-center ">
          I am a {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h2>
      </section>
    </main>
  );
}

export default Home;
