//STYLES
import styles from "./RightNavbar.module.scss";

//HOOKS
import { useContext } from "react";

//CONTEXT
import NavContext from "../../Context/NavContext";

//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";

//Components
import MyProfile from "./Submenus/MyProfile";
import Support from "./Submenus/Support";
import { NavLink } from "react-router-dom";




const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div className={styles.container}>
      {/* BURGER */}
      <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
          
        }}
      >
        <MdOutlineMenu />
        
      </div>

      {/* ACTIONS */}
      
      <div className="Nav1">
      <NavLink
    className="navbar-item" style={{ textDecoration: 'none', paddingRight: "5rem", paddingLeft: "3rem",
    fontWeight: 'bold', color: "black"}}
    
    activeClassName="is-active"
    to="/"
    exact
>
	Teams
</NavLink>
<NavLink
    className="navbar-item" style={{ textDecoration: 'none', paddingRight: "5rem", fontWeight: 'bold',
     color: "#c3c9c5" }}
     to="U29"
    exact
>
	U29
</NavLink>
<NavLink
    className="navbar-item" style={{ textDecoration: 'none', paddingRight: "5rem", fontWeight: 'bold',
    color: "#c3c9c5"  }}
    to="U19"
    exact
>
	U19
  
</NavLink>
      </div>
      <div className={styles.actions}>
        
      
        <Support />
      </div>

      {/* My Profile */}
      <MyProfile />
    </div>
  );
};

export default RightNavbar;
