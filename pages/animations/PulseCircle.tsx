import styles from '../../styles/Home.module.css';

const PulseCircle = () => {
    
    return (
        <div className={styles.pulseEffect}>
     <div className={styles.circle}></div>
     <div className={styles.circle}></div>
     <div className={styles.circle}></div>
     <div className={styles.circle}></div>
</div>
    )
}

export default PulseCircle;