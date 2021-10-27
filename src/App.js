import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const info = {
  particles : {
    number: {
      value : 30,
      density : {
        enable :true ,
        value_area : 800
      }
    }
  }
}



const app = new Clarifai.App({
 apiKey: 'ece325a7844b46e5b395d35ee1be9a41'
});

 
class App extends Component{
  constructor(){
    super();
    this.state= {
      input : '',
      imageUrl: '',
      box: {}
     
    }
  }
 
  calculateFaceDimensions=(data)=>{
    const dimensions= data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementById('user-input');
    const height= image.height;
    const width= image.width;
    
    return {
      left: dimensions.left_col * width,
      top : dimensions.top_row * height ,
      right: width - (dimensions.right_col * width),
      bottom: height - (dimensions.bottom_row * height)
    }
  }

  displayFaceDimensions=(output)=>{
    this.setState({box:output});
    
  }

onInputChange=(event)=>{
  this.setState({input: event.target.value});
  
}


onButtonClick=()=>{
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then((response)=>{
      this.displayFaceDimensions( this.calculateFaceDimensions(response));
       
     })
     .catch((err)=>console.log(err));
}


  
  render(){
    return (
      <div className="App">
        <Particles className='particles' params= {info}  />
        <Navigation/>
        <Logo/>
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonClick={this.onButtonClick}
        
        />
        <FaceRecognition imageUrl={this.state.imageUrl} box= {this.state.box} />
      </div>
    );


  }
}

  


export default App;
