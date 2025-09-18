import React from "react";

const Story = () => {
  return (
    <div className="overflow-hidden h-[85vh] sm:h-screen">
      <div data-scroll data-scroll-speed="-0.5" className="relative w-full flex items-center overflow-hidden h-[85vh] sm:h-screen  bg-[#070707] text-[#e0ccbb]">
        <div className="absolute w-full max-w-screen-2xl mx-auto px-7 sm:px-28">
          <div className="space-y-7 sm:space-y-10">
            <div>
              <h1 className="text-6xl sm:text-[9rem] sm:tracking-tighter">My</h1>
              <h1 className="text-6xl sm:text-[9rem] sm:tracking-tighter">Approach</h1>
            </div>
            <p className="text-lg sm:opacity-90 sm:text-2xl sm:w-1/2 leading-[1.5rem]">
              The story behind my work is one of exploration, creativity and curiosity.
            </p>
            <a className="border-b-2 inline-block sm:hidden border-[#e0ccbb]" href="#">
              About Me
            </a>
            <span className="inline-block w-full h-[1px] opacity-50 bg-[#e0ccbb]"></span>
            <div className="flex justify-between items-end">
              <div className="flex gap-28 sm:gap-32">
                <ul className="space-y-2">
                  {["Services", "About", "Contact"].map((item) => (
                    <a
                      key={item}
                      className="block text-sm opacity-85 capitalize"
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {["LinkedIn", "GitHub", "Twitter"].map((item) => (
                    <a
                      key={item}
                      className="block text-sm opacity-85 capitalize"
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </ul>
              </div>
              <a className="border-b inline-block max-sm:hidden border-[#e0ccbb]" href="#">About Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;