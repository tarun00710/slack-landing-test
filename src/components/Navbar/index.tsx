
import SlackImg from "../../assets/slack_img.jpg";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router";
import styles from './index.module.css'
import { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/">
          <img src={SlackImg} alt="Slack Logo" className={styles.logo} />
        </Link>
        <ul className={styles.navLinks}>
        <li 
          className={styles.navItem} 
          onClick={() => setIsDropdownOpen((dropdown) => !dropdown)}
        >
          <span className={styles.navText}>
            Product 
            <ChevronDown 
              className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.rotate : ""}`} 
              size={16} 
            />
          </span>

          {isDropdownOpen && (
            <div className={styles.dropdownContainer}>
              <ul className={styles.dropdownMenu}>
                <li><Link to="/product/1">product 1</Link></li>
                <li><Link to="/product/2">product 2</Link></li>
                <li><Link to="/product/3">product 3</Link></li>
              </ul>
            </div>
          )}
        </li>
          <li><Link to="/enterprise">Enterprise</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>    
        </ul>
      </div>
      <div className={styles.navRight}>
        <button className={styles.searchBtn}>
          <Search size={20} />
        </button>
        <Link to="/signin" className={styles.navLink}>Sign in</Link>
        <Link to="/contact" className={`${styles.btn} ${styles.btnOutline}`}>Talk to Sales</Link>
        <Link to="/signup" className={`${styles.btn} ${styles.btnPrimary}`}>Try for Free</Link>
      </div>
    </nav>
  );
};

export default Navbar;
