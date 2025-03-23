import SlackImg from "../../assets/slack_img.jpg";
import { ChevronDown, Search, X } from "lucide-react";
import { Link } from "react-router";
import styles from "./index.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/">
          <img src={SlackImg} alt="Slack Logo" className={styles.logo} />
        </Link>
        <ul className={styles.navLinks}>
          <li 
            className={styles.navItem} 
            onClick={() => setIsDropdownOpen((prev) => !prev)}
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
                  <li><Link to="/product/1">Product 1</Link></li>
                  <li><Link to="/product/2">Product 2</Link></li>
                  <li><Link to="/product/3">Product 3</Link></li>
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
        {isSearchOpen ? (
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search..." 
              className={styles.searchInput} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.searchBtn}>Search</button>
            <button className={styles.closeSearch} onClick={() => setIsSearchOpen(false)}>
              <X size={18} />
            </button>
          </div>
        ) : (
          <button className={styles.searchBtn} onClick={() => setIsSearchOpen(true)}>
            <Search size={20} />
          </button>
        )}

        <Link to="/signin" className={styles.navLink}>Sign in</Link>
        <Link to="/contact" className={`${styles.btn} ${styles.btnOutline}`}>Talk to Sales</Link>
        <Link to="/signup" className={`${styles.btn} ${styles.btnPrimary}`}>Try for Free</Link>
      </div>
    </nav>
  );
};

export default Navbar;
