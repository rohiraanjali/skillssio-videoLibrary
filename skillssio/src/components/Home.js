
import "../App.css"
import Sidebar from "./sidebar";
import React from "react";
import { NavLink , Link} from "react-router-dom";
import HomeImg from "./img1.png";
import {allVideos} from "../Database/allVideos"
import { displayVideos } from "../Database/displayVideos";
import searchIcon from "./search.svg";
const Home = () => {
    return (
<div className="main_wrapper">
    <Sidebar />
      
     <div className="home-wrapper__main">
        
     {/* <nav className="nav-wrapper">
        <div className="list-logo-wrapper">
         <div className="search-container-wrapper"> 
         <form className="search-container">
    <input type="text" id="search-bar" placeholder="What can I help you with today?" />
    <a href="#"><img className="search-icon" src={searchIcon}/></a>
  </form></div> */}
 
{/* 
        </div>
        
      </nav> */}
      <nav>
        <div style={{display: "flex" , flexDirection: "row" , justifyContent: "space-between"}}>

     <form className="search-container-home">
    <input type="text" id="search-bar-home" placeholder="What can I help you with today?" />
    <a href="#"><img className="search-icon" src={searchIcon}/></a>
  </form>  
  <div style={{float: "right" , position: "relative" , top: "0"}} className="user-avatar"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
  </div>
  </nav>
  <br />

  <span className="home_badge">&nbsp; &nbsp;FEATURED &nbsp; &nbsp;</span>
         <h1 className="main__heading">SKILLS-LAB: Learn & Grow
         <span>with in-demand skills.</span></h1>
         <img src={HomeImg} className="main__image" />
         <p className="main__para">Skills-Lab offers you free curated content from Top industry professionals to level up or build your skills-set from scratch and grow.  </p>

       <div className="btns_home">
         <NavLink to="/video/v=wxsA9Pfpei8">
           <button className="play_home_main">PLAY
           <span className="play_icon_wrapper">
           <i class="fas fa-play"></i>
           </span>
           </button>
           </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
           <span className="save_icon_wrapper">
           <i class="fa fa-bookmark-o" aria-hidden="true"></i>
           </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
           <span className="share_icon_wrapper">
           <i class="fa fa-share-alt" aria-hidden="true"></i>

           </span>
       </div>
    
       <h3 className="discover_home">Discover More</h3>

       <main
        className="videos-list-showcase"
      >
        {displayVideos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item.id}
              >
                <img
                  className="thumbnail-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <div className="video-description">
                    <img className="avatar-img" src={item.avatar} alt="avatar"/>
                  <h4 className="video-title">{item.videoTitle}</h4>
                  <p className="description">{item.channelName}</p>
                  <span className="video-level">Level : {item.level}</span>
                </div>
               
              </div>
            </Link>
            
          );
        })}
      </main>
      <br />
      <br />
      <div className="category-btns">
           <button className="btn-cat ">Programming</button>
          <button className="btn-cat design">Design</button>
          <button className="btn-cat ">Video Editing</button>
          <button className="btn-cat">Copywriting</button>
          <button className="btn-cat">Content creation</button>
          <button className="btn-cat">Marketing</button>
          <button className="btn-cat">Sales</button>
      </div>
      <br />
      <br/>
      <main
        className="videos-list-showcase designVideoList"
      >
        {allVideos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item.id}
              >
                <img
                  style={{ width: "250px" }}
                  className="thumbnail-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <div className="video-description">
                    <img className="avatar-img" src={item.avatar} alt="avatar"/>
                  <h4 className="video-title">{item.videoTitle}</h4>
                  <p className="small-description">{item.channelName}</p>
                  <p className="small-level">Level: {item.level}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
     </div>
    

   
    </div>
    )
}

export default Home;
