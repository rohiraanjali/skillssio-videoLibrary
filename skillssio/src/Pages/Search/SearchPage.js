
import "./SearchPage.css"
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";

const SearchPage = () => {
    return (
<div className="main_wrapper">
    <Sidebar />
     <div className="home-wrapper__search">
       <Navbar /> 
      <br />
      <br />
      <div className="search-category-btns">
        <button className="skills-category ">
        <i class="fas fa-laptop-code"></i>
        <div className="skills-category-name">Programming</div>
        </button>
        <button className="skills-category">
        <i class="fas fa-paint-brush"></i>
        <div className="skills-category-name">Graphic Design</div>
        </button>
        <button className="skills-category design">
        <i class="fab fa-figma"></i>
        <div className="skills-category-name">Product Design</div>
        </button>
        <button className="skills-category">
        <i class="fab fa-youtube"></i>
        <div className="skills-category-name">Video Editing</div>
        </button>
        <button className="skills-category">
        <i class="fas fa-blog"></i>
        <div className="skills-category-name">Copywriting</div>
        </button>
        <button className="skills-category">
        <i class="fas fa-photo-video"></i>
        <div className="skills-category-name">Content Creation</div>
        </button>
        <button className="skills-category">
        <i class="fas fa-bullhorn"></i>
        <div className="skills-category-name">Marketing</div>
        </button>
        <button className="skills-category">
        <i class="fas fa-poll"></i>
        <div className="skills-category-name">Sales</div>
        </button>
      </div>
</div>
   
    </div>
    )
}

export default SearchPage;
