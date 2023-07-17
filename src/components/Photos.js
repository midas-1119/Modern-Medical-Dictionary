import React from "react";

export default function Photos({ photos }) {
  console.log(photos, "photos");
  if (photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {photos.map((photo, index) => {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={photo.src.landscape}
                      alt="litrato"
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
