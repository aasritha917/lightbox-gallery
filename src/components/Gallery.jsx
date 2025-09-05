import React, { useState } from "react";
import { images } from "../data/images";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="grid">
        {images.map((img, i) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelected(i)}
            className="thumb"
          />
        ))}
      </div>

      {selected !== null && (
        <Lightbox
          images={images}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}
