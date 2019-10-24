import React from "react";

export default function Carousel() {
  return (
    <div>
      <div class="container main-carousel">
        <div
          id="carouselExampleCaptions"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="100">
              <img
                src="https://www.hipstersofthecoast.com/wp-content/uploads/2019/07/commander-2019-twoer-art.jpg"
                class="d-block w-100"
                alt="..."
                height="400"
                width="200"
              ></img>

              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>

            <div class="carousel-item" data-interval="100">
              <img
                src="https://mtgazone.com/wp-content/uploads/2019/07/throne-of-eldraine-art-logo.jpg"
                class="d-block w-100"
                alt="..."
                height="400"
                width="200">
                </img>

              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>

            <div class="carousel-item" data-interval="100">
              <img src="https://magic.wizards.com/sites/mtg/files/MTGArena_logo.png" 
              class="d-block w-100" 
              alt="Planes Walker logo"
              height="400"
              width="200">
              </img>

              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
