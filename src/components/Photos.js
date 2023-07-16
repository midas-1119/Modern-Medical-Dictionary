import React from "react";


export default function Photos ({ photos }) {
  console.log(photos,"photos");
  if (photos) {
    return (
      <div className="Photos">
        <section>
         <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div key={index}>
                <a href="{photo.src.original}" target="_blank" />
                <img src= {photo.src.landscape}
                className="img-fluid" />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
