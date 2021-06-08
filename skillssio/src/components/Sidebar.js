import { NavLink , Link} from "react-router-dom";
import playerLogo from "./video-logo1.png";
import React from "react";
import {useVideo} from "../contexts/VideoContext"

const Sidebar = () => {


    const {
        state: { playlists }
    } = useVideo();
    const [isDesktop, setDesktop] = React.useState(window.innerWidth > 720);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 620);
    };
  
    React.useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <>
        <div className="home-wrapper"> 
    
    {isDesktop ? <aside className="home-wrapper__aside">
    <img className="player-logo" src={playerLogo} style={{width: "55%"}}/>
         <br />
       <ul className="home-wrapper__aside__list">
         <NavLink to="/" className="side-nav-link">
             <div className="list-item-heading">Browse videos</div>
           <li className="pointer">
           <div className="bg-pointer" style={{ width: "225px", marginLeft: "8px" , padding: "8px" , textAlign: "left"}}>
             <i className="fas fa-home pointer"></i>
             <span className="list-item-title">Home</span>
             </div>
           </li>
         </NavLink>

         <NavLink to="/explore" className="side-nav-link">
             <li className="pointer">
             <div className="bg-pointer" style={{ width: "220px", marginLeft: "8px" , padding: "10px" , textAlign: "left"}}>
             <i className="fas fa-search" aria-hidden="true"></i>
               <span className="list-item-title">Explore</span>
               </div>
             </li>
           </NavLink>

           <br />
         <NavLink to="/history" className="side-nav-link">
             <div className="list-item-heading">Your Videos</div>
           <li className="pointer">
           <div className="bg-pointer" style={{width: "220px",marginLeft: "8px", padding: "10px" , textAlign: "left"}}>
             <i className="fas fa-history pointer"></i>
             <span className="list-item-title">History</span>
             </div>
           </li>
         </NavLink>

         <NavLink to="/watchLaterVideos" className="side-nav-link">
           <li className="pointer">
           <div  className="bg-pointer" style={{width: "220px",marginLeft: "8px", padding: "10px" , textAlign: "left"}}>
             <i class="fas fa-clock pointer"></i>
             <span className="list-item-title">Watch later</span>
             </div>
           </li>
         </NavLink>

         <NavLink to="/likedVideos" className="side-nav-link">
           <li className="pointer">
           <div  className="bg-pointer" style={{width: "220px",marginLeft: "8px", padding: "10px" , textAlign: "left"}}>
             <i class="fas fa-thumbs-up pointer"></i>
             <span className="list-item-title">Liked videos</span>
             </div>
           </li>
         </NavLink>
         <br />
         <NavLink to="/playlist" className="side-nav-link">
             <div className="list-item-heading">Your Playlist</div>
           <li className="pointer">
           <div className="bg-pointer" style={{width: "220px",marginLeft: "8px", padding: "10px" , textAlign: "left"}}>
           <i className="fas fa-list pointer"></i>
             <span className="list-item-title">New Playlist</span>
             </div>
           </li>
           <li className="pointer">
         <div>
         {playlists.map((playlist) => {
          <h1 style={{color: "white"}}>{playlist.listName}</h1>
         })}
        
         </div>
           </li>
         </NavLink>
       </ul>
     </aside> : null}
     </div>

     {isDesktop ? null : (
        <div className="home-wrapper-mobile">
        <ul className="home-wrapper__div__bottom__list">
          <NavLink to="/" className="side-nav-link">
            <li className="pointer-mobile">
              <i className="fas fa-home pointer"></i>
            </li>
          </NavLink>

          <NavLink to="/watchHistory" className="side-nav-link">
            <li className="pointer-mobile">
              <i className="fas fa-history pointer"></i>
            </li>
          </NavLink>

          <NavLink to="/watchLaterVideos" className="side-nav-link">
            <li className="pointer-mobile">
              <i class="fas fa-clock pointer"></i>
            </li>
          </NavLink>

          <NavLink to="/likedVideos" className="side-nav-link">
            <li className="pointer-mobile">
              <i class="fas fa-thumbs-up pointer"></i>
            </li>
          </NavLink>
         
          <NavLink to="/watchHistory" className="side-nav-link">
            <li className="pointer-mobile">
            <i className="fas fa-list pointer"></i>
            </li>
          </NavLink>
        </ul>
        </div>
          )
        }
        </>
    )
}

export default Sidebar;