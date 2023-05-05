import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {

    const router = useRouter();

    return (
        <div className={styles.navbar}>
            <h2 onClick={ () => {
                router.push("/");
            }}>Home</h2>
            <h2 onClick={ () => {
                router.push("/Projects");
            }}>Projects</h2>
            <h2>LERN</h2>
            <h2>miscellaneous</h2>
            <h2>Contact</h2>
        </div>
    )
}