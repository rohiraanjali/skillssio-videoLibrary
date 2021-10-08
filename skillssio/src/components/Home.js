import "./Home.css"
import Sidebar from "./sidebar";
import Navbar from "./Navbar"
import React from "react";
import { NavLink , Link } from "react-router-dom";
import HomeImg from "./img1.png";
import searchIcon from "./search.svg";
import { useVideo } from "../contexts/VideoContext";
const Home = () => {
  const {state} = useVideo()
  const videos = state.videos;
    return (
<div className="main_wrapper">
    <Sidebar />
    <div className="home-wrapper__main">
      <Navbar />
      <br />
  <span className="home_badge">&nbsp; &nbsp;FEATURED &nbsp; &nbsp;</span>
        <br/>
        <br/>
        <h1 className="main__heading">SKILLS-LAB: Learn & Grow
        <span>with in-demand skills.</span></h1>
        <img src={HomeImg} className="main__image" />
        <p className="main__para">Skills-Lab offers you free curated content from Top industry professionals to level up or build your skills-set from scratch and grow.  </p>

      <div className="btns_home">
        <NavLink to="/video/v=wxsA9Pfpei8">
          <button className="play_home_main">PLAY
          <span className="play_icon_wrapper">
          <i class="fa fa-play"></i>
          </span>
          </button>
          </NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="play_icon_wrapper_mobile">
          <i class="fa fa-play"></i>
          </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="save_icon_wrapper">
          <i class="fa fa-bookmark-o" aria-hidden="true"></i>
          </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="share_icon_wrapper">
          <i class="fa fa-share-alt" aria-hidden="true"></i>
          </span>
      </div>

      <div className="category-btns">
          <button className="btn-cat ">Programming</button>
          <button className="btn-cat design">Product Design</button>
          <button className="btn-cat ">Graphic Design</button>
          <button className="btn-cat ">Video Editing</button>
          <button className="btn-cat">Copywriting</button>
          <button className="btn-cat">Marketing</button>
          <button className="btn-cat">Sales</button>
      </div>
      <br />
      <br />
      
      <main
        className="designVideoList"
      >
        {videos?.map((item) => {
          return (
            <Link to={`/video/${item._id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item._id}
              >
                <img
                  style={{ width: "100%" }}
                  className="thumbnail-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <div className="video-description">
                    <img className="avatar-img" src={item.avatar} alt="avatar"/>
                    <div className="video-details">
                  <h4 className="video-title">{item.videoTitle}</h4>
                  <p className="small-description">{item.channelName}</p>
                  <p className="small-level">Level: {item.level}</p>
                  </div>
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
