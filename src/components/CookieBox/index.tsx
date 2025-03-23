import { useState } from "react";
import styles from "./index.module.css";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBox}>
      <button className={styles.closeBtn} onClick={() => setIsVisible(false)}>
        <X size={18} />
      </button>
      <p>
        This website uses cookies to enhance your experience, analyze performance, 
        and share information with our analytics partners. 
        <a href="/cookie-policy" className={styles.moreInfo}> More Info</a>.
      </p>
      <button className={styles.acceptBtn}>Accept All Cookies</button>
      <button className={styles.acceptBtn}>Decline</button>
    </div>
  );
};

export default CookieConsent;
