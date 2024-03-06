import React from "react";

const ImageGalllery = () => {
  return (
    <div className="container">
      <div className="coloumn">
        <div className="photo">
          <img src="/pic1.png" />
        </div>
        <div className="photo">
          <img src="/pic4.png" />
        </div>
        <div className="photo">
          <img src="/pic5.png" style={{ height: "119%" }} />
        </div>
      </div>
      <div className="coloumn">
        <div className="photo">
          <img src="/pic3.png" />
        </div>
        <div className="photo">
          <img src="/pic8.png" alt="Pic 8" />
        </div>
        <div className="photo">
          <img src="/pic2.png" />
        </div>
      </div>
      <div className="coloumn">
        <div className="photo">
          <img src="/pic6.png" />
        </div>
        <div className="photo">
          <img src="/pic7.png" />
        </div>
        <div className="photo">
          <img src="/pic9.png" style={{ height: "120%" }} />
        </div>
      </div>
    </div>
  );
};

export default ImageGalllery;
