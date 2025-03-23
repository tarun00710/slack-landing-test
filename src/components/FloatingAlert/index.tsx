import { useState } from "react";
import styles from "./index.module.css";
import { X } from "lucide-react";

const FloatingAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.alertBox}>
      <div className={styles.closeIcon} onClick={() => setIsVisible(false)}>
        <X size={14} />
      </div>
      <p>Hey there 👋 Want to know something cool?</p>
    </div>
  );
};

export default FloatingAlert;
