import React, { Component } from "react";
import "../../styles/ImageMain.css"
import BlockChoice from "../Home/BlockChoice";
import takePhoto from "../../assets/img/take_photo.png"
import upload from "../../assets/img/upload.png"

class ImageMain extends Component {

  render() {
    return (
      <div className="ImageMain">
        <h2>Les images</h2>
        <div className="container">
          <BlockChoice name={"Take a pic"} 
                       img_link={takePhoto} 
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit quis lectus eu dapibus. Phasellus scelerisque lectus a odio malesuada, vitae molestie ipsum gravida."} 
                       link_to={""}/>
          <BlockChoice name={"Upload"} 
                       img_link={upload} 
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit quis lectus eu dapibus. Phasellus scelerisque lectus a odio malesuada, vitae molestie ipsum gravida."} 
                       link_to={""}/>
        </div>
      </div>
    );
  }
}

export default ImageMain