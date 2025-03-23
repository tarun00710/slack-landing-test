import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <>
    <div className={styles.heroSection}>
      <div className={styles.left}>
        <h1>Slack is where the future works</h1>
        <p>
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>
        <div className={styles.buttons}>
          <button className={styles.tryFreeBtn}>TRY FOR FREE</button>
          <button className={styles.googleBtn}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              className={styles.googleIcon}
            />
            SIGN UP WITH GOOGLE
          </button>
        </div>
      </div>
    
      <div className={styles.right}>
          <img
            src="https://picsum.photos/500/300"
            alt="Slack preview"
            className={styles.heroImage}
          />
          <span className={`${styles.emoji} ${styles.topLeft}`}>💡 8</span>
          <span className={`${styles.emoji} ${styles.topRight}`}>👍 3</span>
          <span className={`${styles.emoji} ${styles.middle}`}>🚀 5</span>
        </div>
    </div>

    <div className={styles.partnersSection}>
        <div className={styles.partners}>
          <img src="https://via.placeholder.com/100x50" alt="FOX Logo" />
          <img src="https://via.placeholder.com/100x50" alt="Lonely Planet Logo" />
          <img src="https://via.placeholder.com/100x50" alt="Intuit Logo" />
          <img src="https://via.placeholder.com/100x50" alt="Airbnb Logo" />
          <img src="https://via.placeholder.com/100x50" alt="Spotify Logo" />
        </div>
    </div>
    
    <div className={`${styles.heroSection}`}>
            <div className={styles.right}>
                <img
                    src="https://picsum.photos/500/300"
                    alt="Team Collaboration"
                    className={styles.heroImage}
                />

            </div>
            <div className={styles.left}>
                    <h1>Now is your moment to build a better tommorow</h1>
                    <p>
                    Communicate and collaborate effortlessly with your team, no matter
                    where you are. Slack helps you work smarter and faster.
                    </p>
                    <button className={styles.watchVideoBtn}>WATCH VIDEO</button>
            </div>
    </div>
    </>
  );
};

export default HeroSection;
