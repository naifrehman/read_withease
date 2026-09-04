import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "../App.css";

function AnimatedBox({ children, initialVisible = false }) {
  const [scrollY, setScrollY] = useState(0);
  const boxRef = useRef(null);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let boxTop = boxRef.current ? boxRef.current.offsetTop : 0;
  let difference = window.innerHeight + scrollY - boxTop;

  const { opacity, scale } = useSpring({
    opacity:
      difference > 0 && difference < window.innerHeight
        ? 1 - 0.5 * (scrollY / boxTop)
        : initialVisible && scrollY < boxTop
        ? 1
        : 0,
    scale: difference > 0 && difference < window.innerHeight ? 1 : 0.8,
  });

  return (
    <animated.div ref={boxRef} style={{ opacity, scale }}>
      {children}
    </animated.div>
  );
}

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 p-8 text-center">
      <div className="w-[80%] flex flex-col md:flex-row justify-between items-center gap-8">
        <img
          src="https://cdn.dribbble.com/users/2367833/screenshots/7816190/media/b1aaf5c98510012b56422d1619dc62e8.gif"
          alt="Books Image"
          className="rounded-full w-[80%] h-[80%] md:w-[400px] md:h-[400px] object-cover"
        />
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-bold">
            A free and fun way to improve reading skills for people with
            dyslexia!
          </h1>
          <div className="flex flex-col gap-4">
            <Link to="/register">
              <button className="hover-rise px-6 py-3 text-lg bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="hover-rise px-6 py-3 text-lg border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
                I have an account!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <p className="w-[90%] md:w-[60%]">
        Training with ReadRight is engaging, and studies indicate its
        effectiveness! Through concise, focused lessons, you'll accumulate
        points, progress through stages, and most importantly, enhance your
        reading capabilities.
      </p>

      <div className="mt-6 flex flex-col items-center">
        <AnimatedBox>
          <div className="w-[90%] md:w-[60%] p-6 shadow-md border rounded-md flex justify-between items-center mb-6">
            <div className="flex flex-col items-start gap-7 max-w-[50%]">
              <h2 className="text-2xl font-bold text-left">
                A free and productive way to enhance reading skills for
                dyslexics!
              </h2>
              <p className="text-left w-full">
                Training with ReadRight is engaging, and studies indicate its
                effectiveness! Through concise, focused lessons, you'll
                accumulate points, progress through stages, and most
                importantly, enhance your reading capabilities.
              </p>
            </div>
            <img
              src="https://i.pinimg.com/originals/4c/79/70/4c7970c030c4b8a8322171dd6a498cb0.gif"
              alt="Reading Image"
              className="w-[80%] h-[80%] md:w-[400px] md:h-[400px] rounded-full mr-6 object-cover"
            />
          </div>
        </AnimatedBox>

        <AnimatedBox>
          <div className="w-[90%] md:w-[60%] p-6 shadow-md border rounded-md flex justify-between items-center mb-6">
            <img
              src="https://i.pinimg.com/originals/9a/e0/aa/9ae0aa2ff25aa43147538ac2a9f3137f.gif"
              alt="Reading Image"
              className="w-[80%] h-[80%] md:w-[400px] md:h-[400px] rounded-full mr-6 object-cover"
            />
            <div className="flex flex-col items-end gap-2 max-w-[50%]">
              <h2 className="text-2xl font-bold text-right">
                Rooted in Research
              </h2>
              <p className="text-right w-full">
                We harness a blend of evidence-based instructional techniques
                and captivating content to design modules that efficiently
                bolster reading comprehension and fluency.
              </p>
            </div>
          </div>
        </AnimatedBox>

        <AnimatedBox>
          <div className="w-[90%] md:w-[60%] p-6 shadow-md border rounded-md flex justify-between items-center mb-6">
            <div className="flex flex-col items-start gap-2 max-w-[50%]">
              <h2 className="text-2xl font-bold text-left">
                Keep the Momentum
              </h2>
              <p className="text-left w-full">
                We facilitate consistent practice with rewarding features,
                engaging tasks, and gentle reminders.
              </p>
            </div>
            <img
              src="https://i.pinimg.com/originals/9c/23/73/9c2373930fc4bc8f6d3eb9fae4f017dd.gif"
              alt="Reading Image"
              className="w-[80%] h-[80%] md:w-[400px] md:h-[400px] rounded-full mr-6 object-cover"
            />
          </div>
        </AnimatedBox>

        <AnimatedBox>
          <div className="w-[90%] md:w-[60%] p-6 shadow-md border rounded-md flex justify-between items-center mb-6">
            <img
              src="https://cdn.dribbble.com/users/77598/screenshots/16399264/media/d86ceb1ad552398787fb76f343080aa6.gif"
              alt="Reading Image"
              className="w-[80%] h-[80%] md:w-[400px] md:h-[400px] rounded-full mr-6 object-cover"
            />
            <div className="flex flex-col items-end gap-4 max-w-[70%]">
              <h2 className="text-2xl font-bold text-right">
                Tailored to You
              </h2>
              <p className="text-right w-full">
                Marrying the pinnacle of AI and pedagogical research, our
                sessions are adjusted to guide you through the ideal learning
                intensity and rhythm.
              </p>
            </div>
          </div>
        </AnimatedBox>
      </div>
    </div>
  );
}

export default HomePage;