import React from "react";
import './ImageLinkForm.css';


const ImageLinkForm=({onInputChange,onButtonClick})=>{

    
    return(
        <div >
            <h3>This is a magic app that will detect faces in your pictures. Just enter a url to any image.</h3>

            <div className = 'custom-flex mv2'>
                <div className='pa4 shadow-5 custom-flex form br3'>
                    <input className='w-70 shadow-3'
                     type='text' 
                     placeholder='enter image url' 
                     onChange={onInputChange} 
                     onKeyDown={(event)=>{
                        if(event.keyCode===13){
                           onButtonClick()
                        }
                    }}
                     />

                    <button 
                    className='w-30 grow shadow-3 link pa2 bg-light-purple dib pointer'
                    onClick={onButtonClick}
                    
                    >Detect</button>
                </div>
            </div>

        </div>
    )
}

export default ImageLinkForm;