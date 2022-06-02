//STYLES
import styles from "./Navbar.module.scss";

//CONTEXT
import { useContext } from "react";
import NavContext from "../../Context/NavContext";

//REACT ROUTER
import { NavLink } from "react-router-dom";

//ICONS
import { CgChart } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import {RiTeamLine} from "react-icons/ri";
import {GiNotebook} from "react-icons/gi";
import {BiCalendar} from "react-icons/bi";
import {FcComboChart} from "react-icons/fc";
import {AiOutlineSetting} from "react-icons/ai";
import { 
  MdOutlineLogout,
} from "react-icons/md";



import { VscDashboard } from "react-icons/vsc";

const NavUrl = ({ url, icon, description }) => {
  const { nav, setNav } = useContext(NavContext);
  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setNav(!nav);
  };

  return (
    <li className={styles.li_navlink}>
      <NavLink
        to={`${url}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        onClick={() => checkWindowSize()}
      >
        {icon}
        <span className={styles.description}>{description}</span>
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div
      className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : undefined
      }`}
    >
      <nav className={nav ? undefined : styles.nav_small}>
        {/* LOGO */}
        <div className={styles.logo}>
          <VscDashboard className={styles.logo_icon} />
          
          
          <h5>Logobrand</h5>
        </div>

        {/* MENU */}
        <ul className={styles.menu_container}>
          {/* FIRST CATEGORY */}
          

          <NavUrl
            url="/"
            icon={<CgChart />}
            description="Dashboard"
          />
          <NavUrl
            url="Analytics"
            icon={<FaClipboard />}
            description="TacticsVault"
          />
          <NavUrl
            url="Teams"
            icon={<RiTeamLine />}
            description="Teams"
          />
         

          <NavUrl
            url="ScheduleGenerator"
            icon={<GiNotebook />}
            description="Schedule Generator"
          />

          <NavUrl
            url="WeeklyTraningPlans"
            icon={<BiCalendar />}
            description="Weekly Traning Plans"
          />
           <NavUrl url="TeamsMetrics" icon={<FcComboChart />} description="TeamsMetrics" />
          <NavUrl url="Customizations" icon={<AiOutlineSetting />} description="Customizations" />
        </ul>

        
          {/* SECOND CATEGORY */}
          <span
            className={`${styles.categories} 
          ${styles.second_category}`}
          >
           <p>Select Your Teams</p>
          </span>

          <button class="btn btn-light">Teams Name </button>

        {/* LOGOUT BUTTON */}
        <div
          className={`${styles.btn_logout}`}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div>
      </nav>

      <div
        className={nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
    </div>
  );
};

export default Navbar;
