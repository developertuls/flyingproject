
import React, { useRef } from "react";

export const HoverZoom = ({ src, alt = "image" }) => {
  const imgRef = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseEnter = () => {
    imgRef.current.style.transform = "scale(2)";
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = "scale(1)";
    imgRef.current.style.transformOrigin = "center";
  };

  return (
    <div
      className="w-full h-[400px] overflow-hidden rounded shadow group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="object-cover, max-w-3xl, cursor-zoom-in  w-full h-full object-cover transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};
