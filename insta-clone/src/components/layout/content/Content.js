import styles from "./Content.module.css";
import imglogo from "../../../imglogo.jpg";

function Content() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentStyle}>
                <div className={styles.logoImage}>
                   <img src={imglogo} alt="logo"></img>
                </div>
                <div className={styles.templateDescription}>

                    <div className={styles.topic}>
                        <h4>organizeURspace</h4>
                    </div>

                    <div className={styles.subdescription}>
                        <button className={styles.msgFollow}>Follow</button>
                        <button className={styles.msgFollow}>Message</button>
                        <button className={styles.continues}>....</button>
                    </div>   

                    <div className={styles.followLabel}>
                        <label className={styles.singleLabel}>10 posts</label>
                        <label className={styles.singleLabel}>100 followers</label>
                        <label className={styles.singleLabel}>10 following</label>
                    </div> 

                    <div className={styles.textContent}>
                        <p>home decor</p>
                        <p>design ideas</p>
                        <p>lifestyle</p>
                     </div> 

                </div>
            </div>    
        </div> 
    );
}
  
export default Content;