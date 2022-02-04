import React, { Component } from "react";
import axios from 'axios';

import "../../styles/ImageMain.css"
import BlockChoice from "../Home/BlockChoice";
import takePhoto from "../../assets/img/take_photo.png"
import upload from "../../assets/img/upload.png"
import FileUploadPage from "../FileUploadPage";

class ImageMain extends Component {

  state = {selectedFile: null};
  
  // On file select (from the pop up)
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);
    axios.post("api/uploadfile", formData);
  };

  infoFile = () => {
    if (this.state.selectedFile) {
      if (this.state.selectedFile.type === 'image/jpeg' || this.state.selectedFile.type === 'image/png') {
        return (
          <span className="image-infos">
            {this.state.selectedFile.name}
          </span>
        )
      }
      else {
        return (
          <span className="image-infos">
            file need to be an image 
          </span> 
        )
      }
    }
    else {
      return (
        <span className="image-infos">
          nothing
        </span>
      )
    }
  }

  render() {
    return (
      <div className="ImageMain">
        <h2>Images</h2>
        <div className="container">
          <BlockChoice name={"Take a pic"} 
                       img_link={takePhoto} 
                       description={"Pour l'instant flemme de faire celui là"} 
                       link_to={""}/>

          <label htmlFor={"upload-button"}>
            <BlockChoice name={"Upload"} 
                        img_link={upload} 
                        description={"Ca marche bien c'est cool"} 
                        link_to={""}/>
          </label>
          <input type="file" id="upload-button" style={{display: 'none'}} 
                 onChange={this.onFileChange} accept="image/x-png,image/jpeg" />

          <FileUploadPage />
        </div>

        <div className="text-analyze">
          {this.infoFile()}
          <button className="text-send" onClick={this.onFileUpload}>
            send
          </button>
          <span className="text-block">
            text block
          </span>
        </div>
      </div>
    );
  }
}

export default ImageMain