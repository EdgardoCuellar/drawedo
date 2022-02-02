import React, { Component } from "react";
import BlockChoice from "./BlockChoice";
import "../../styles/Home/Home.css"

class Home extends Component {

  render() {
    return (
      <div className="HomeMain">
        <h2>The Tartine Network</h2>
        <div className="container">
          <BlockChoice name={"Game"} 
                       img_link={"https://cdn.discordapp.com/attachments/718214061283737712/937028286939287632/Daco_4300598.png"} 
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit quis lectus eu dapibus. Phasellus scelerisque lectus a odio malesuada, vitae molestie ipsum gravida."} 
                       link_to={"game"}/>
          <BlockChoice name={"Draw"} 
                       img_link={"https://cdn.discordapp.com/attachments/718214061283737712/937027342201655356/SeekPng.com_patriots-logo-png_295350.png"} 
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit quis lectus eu dapibus. Phasellus scelerisque lectus a odio malesuada, vitae molestie ipsum gravida."} 
                       link_to={"draw"}/>
          <BlockChoice name={"Images"}
                       img_link={"https://cdn.discordapp.com/attachments/718214061283737712/938107948184514580/photo.png"} 
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit quis lectus eu dapibus. Phasellus scelerisque lectus a odio malesuada, vitae molestie ipsum gravida."} 
                       link_to={"image"}/>
        </div>
      </div>
    );
  }
}

export default Home