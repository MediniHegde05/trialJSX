//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading"> My Favourite Foods </h1>
    <div>
      <img
        className="food-img"
        alt="noodles"
        src="https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan-prod-new.s3.amazonaws.com/99865/8f28a60c-e01b-45f2-9b9c-094ab19230f6.png"
      />
      <img
        className="food-img"
        alt="pasta"
        src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4"
      />
      <img
        className="food-img"
        alt="sushi"
        src="https://cleangreensimple.com/wp-content/uploads/2011/04/vegan-sushi.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
