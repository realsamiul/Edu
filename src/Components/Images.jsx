// src/Components/Images.jsx
import React from "react";

const Images = () => {
  const position = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      right: "right-[80%]",
      top: "top-[30%]",
      height: "h-[30%]",
      width: "w-[100%]",
    },
    {
      image: "https://images.unsplash.com/photo-1581092446333-5b28842f155c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      right: "-right-[40%]",
      top: "top-[10%]",
      height: "h-[35%]",
      width: "w-[50%]",
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      right: "right-[90%]",
      top: "top-[90%]",
      height: "h-[40%]",
      width: "w-[120%]",
    },
    {
      image: "https://images.unsplash.com/photo-1531403009284-440993d21634?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      right: "-right-[90%]",
      top: "top-[86%]",
      height: "h-[50%]",
      width: "w-[100%]",
    },
  ];

  // The useEffect for GSAP animations has been removed.

  return (
    <div className="images-section w-full h-[70vh] sm:h-[180vh] overflow-hidden flex items-center justify-center">
      <div className="relative w-1/3 sm:w-1/4 h-1/2">
        {position.map((item, index) => {
          return (
            <div
              className={`images absolute ${item.height} ${item.width} ${item.top} ${item.right}`}
              key={index}
            >
              <img
                loading="lazy"
                className="h-full w-full object-cover"
                src={item.image}
                alt={`Collage image ${index + 1}`}
              />
            </div>
          );
        })}

        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Central collage image"
        />
      </div>
    </div>
  );
};

export default Images;