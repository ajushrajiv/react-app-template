import styles from "./NavigationBar.module.css";

function NavigationBar() {
    return (
      <div className={styles.mainContainer}>
        <h4>Navigationbar </h4>
        <div>
            <button className={styles.loginbutton}>login</button>
            <button className={styles.signupbutton}>signup</button>
        </div>   
      </div>
    );
  }

export default NavigationBar;