import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    // <div className="mx-auto w-full max-w-7xl">
    //   <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
    //     <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
    //       <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
    //         <h2 className="text-4xl font-bold sm:text-5xl">
    //           Download Now
    //           <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
    //         </h2>

    //         <Link
    //           className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
    //           to="/"
    //         >
    //           <svg
    //             fill="white"
    //             width="24"
    //             height="24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //           >
    //             <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
    //           </svg>
    //           &nbsp; Download now
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
    //       <img
    //         className="w-96"
    //         src="https://i.ibb.co/5BCcDYB/Remote2.png"
    //         alt="image1"
    //       />
    //     </div>
    //   </aside>

    //   <div className="grid  place-items-center sm:mt-20">
    //     <img
    //       className="sm:w-96 w-48"
    //       src="https://i.ibb.co/2M7rtLk/Remote1.png"
    //       alt="image2"
    //     />
    //   </div>

    //   <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
    //     Lorem Ipsum Yojo
    //   </h1>
    // </div>

    <div className="container">
      <h1>My Gallery</h1>
      <div className="gallery">
        {/* <figure class="image-box">
      <img src="" alt="image1">
      <figcaption>Image 1</figcaption>

  </figure> */}
        {/* 
      <figure class="image-box">
          <img src="" alt="image1">
          <figcaption>Image 1</figcaption>

          <figure class="image-box">
              <img src="" alt="image1">
              <figcaption>Image 1</figcaption>

              <figure class="image-box">
                  <img src="" alt="image1">
                  <figcaption>Image 1</figcaption>

                  <figure class="image-box">
                      <img src="" alt="image1">
                      <figcaption>Image 1</figcaption>

                      <figure class="image-box">
                          <img src="" alt="image1">
                          <figcaption>Image 1</figcaption>

                          <figure class="image-box">
                              <img src="" alt="image1">
                              <figcaption>Image 1</figcaption>

                              <figure class="image-box">
                                  <img src="" alt="image1">
                                  <figcaption>Image 1</figcaption> */}
        <figure className="image-box">
          <img
            src="https://source.unsplash.com/random/300×300/?tajmahal, redfort"
            alt="image1"
          />
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}

          <figcaption>image1</figcaption>
        </figure>

        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/350x350/?shillong,arunachal-pradesh,valley, natural-scenes
          "
            alt="image1"
          />
          <figcaption>image2</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?rajasthan, palaces, natural-scenes"
            alt="image1"
          />
          <figcaption>image3</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?mountain, india, scenes, nature"
            alt="image1"
          />
          <figcaption>image4</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?lucknow, kashi, agori"
            alt="image1"
          />
          <figcaption>image5</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?kedarnath,kedarnath-view,shiva"
            alt="image1"
          />
          <figcaption>image6</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?delhi, city-life, beautiful-images, new-delhi, jantar-mantar, red-fort, parliament"
            alt="image1"
          />
          <figcaption>image7</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?aganta-caves, allora-caves"
            alt="image1"
          />
          <figcaption>image8</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?kashmir, dal-lake"
            alt="image1"
          />
          <figcaption>image9</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/300×300/?kerala, tamilnadu, south-india-nature"
            alt="image1"
          />
          <figcaption>image10</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image"> */}
          <img
            src="https://source.unsplash.com/random/300×300/?beautiful-nature, india's-most-beautiful-places"
            alt="image1"
          />
          <figcaption>image11</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/350x350/?lotus-temple
"
            alt="image1"
          />
          <figcaption>image12</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/350x350/?gwalior-fort
      "
            alt="image1"
          />
          <figcaption>image13</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/350x350/?mehrangarh-fort"
            alt="image1"
          />
          <figcaption>image14</figcaption>
        </figure>
        <figure className="image-box">
          {/* <img src="https://codehelp-image-gallery.netlify.app/images/image1.jpg" alt="image">  */}
          <img
            src="https://source.unsplash.com/random/350x350/?pangong-lake
      "
            alt="image1"
          />
          <figcaption>image15</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Home;
