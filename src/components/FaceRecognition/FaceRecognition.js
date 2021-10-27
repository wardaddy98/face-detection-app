import React from "react";
import './FaceRecognition.css';



const FaceRecognition=({imageUrl,box})=>{
   
    return(
       <div className='pa4 custom-flex'>
           <div className='container custom-flex' >
                <img id='user-input' src={imageUrl} alt='' />
                <div className= 'bounding-box' style= {{top: box.top, bottom: box.bottom, left : box.left, right: box.right}}></div> 
            </div>   
       </div>
    )
}
export default FaceRecognition;