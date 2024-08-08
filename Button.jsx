import React, { useState } from "react";

function Button(){
    const [newImg, setImg] = useState("olive");

    const changeBackgroundImg = (newImg) => {
      setImg(newImg);
      document.body.style.backgroundImage = `url(${newImg})`;
     
      document.body.style.backgroundSize = "cover"; // Adjust size: 'cover', 'contain', '100% 100%', etc.
      document.body.style.backgroundRepeat = "no-repeat"; // Prevent image repetition
      document.body.style.backgroundPosition = "center"; // Position the image
      document.body.style.height = "80vh";
      

    };
    return(
        
        <div className="height-full width-full fixed flex flexWrap">
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <button
        onClick = {()=>{changeBackgroundImg("./images/deepti.png.jpg")}}
          
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Button text
        </button>
        <button
          onClick={()=>changeBackgroundImg("./images/deepti2.png.jpg")}
          type="button"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Button text
        </button>
        <button
        onClick={()=>changeBackgroundImg("./images/deepti3.png.jpg")}
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Button text
        </button>
       
      
        
       </div> 
      </div>
    )
}
export default Button