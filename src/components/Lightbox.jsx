import React, { useEffect } from "react";

export default function Lightbox({ images, selected, setSelected }) {
  const close = () => setSelected(null);

  useEffect(() => {
    const handleKey = e => e.key === "Escape" && close();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="overlay" onClick={close}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img
          src={images[selected].src}
          alt={images[selected].alt}
          className="main-img"
          onClick={close}
        />
        <div className="thumb-row">
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`thumb-box ${i === selected ? "active" : ""}`}
              onClick={() => setSelected(i)}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
