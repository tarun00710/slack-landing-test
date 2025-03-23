import { useState } from "react";
import styles from "./index.module.css";
import { X, ArrowRight } from "lucide-react"; // Import Lucide icons
import { Link } from "react-router";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.alertBox}>
      <p>
        <strong>Slack</strong> is your digital <strong>HQ</strong>. Meet the new features keeping teams connected in a work-from-anywhere world. 
        <Link to="/features" className={styles.link}> Let’s go </Link>
        <ArrowRight size={16} />
      </p>
      <X className={styles.closeIcon} onClick={() => setIsVisible(false)} size={20} />
    </div>
  );
};

export default Alert;
