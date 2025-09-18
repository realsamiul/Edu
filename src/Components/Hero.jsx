import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.from(".para p span", {
      y: "100%",
      rotate: 15,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(
      ".headings h1 span",
      {
        y: "100%",
        rotate: 10,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.75"
    );

    gsap.to(".picture img", {
      scrollTrigger: {
        trigger: ".picture",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 1.25,
    });

    gsap.to(".scroll-down", {
      scrollTrigger: {
        trigger: ".hero-main",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
    });
  }, []);

  return (
    <div className="hero-main relative w-full h-[150vh] sm:h-[270vh]">
      <span className="absolute scroll-down hidden sm:block z-[2] right-[10vh] top-[87vh] text-white text-sm">
        Scroll to explore
      </span>
      <div className="picture w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt="Venice Grand Canal"
        />
      </div>

      <div className="absolute w-full top-0 left-0">
        <div className="text text-white max-w-screen-2xl mx-auto h-full px-5 sm:px-32">
          <div className="para mt-72 sm:mt-96">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((item, index) => (
              <p className="font-medium overflow-hidden text-lg sm:text-2xl" key={index}>
                <span className="block">{item}</span>
              </p>
            ))}
          </div>

          <div className="headings mt-5 sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index) => (
              <h1
                className="text-6xl overflow-hidden sm:text-[15rem] tracking-tighter leading-none"
                key={index}
              >
                <span className="block">{item}</span>
              </h1>
            ))}
          </div>

          <div className="mt-20 sm:mt-32 sm:w-1/3">
            <p className="font-medium text-lg sm:text-2xl leading-snug">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a className="border-b sm:text-lg border-white inline-block mt-5" href="#">
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
