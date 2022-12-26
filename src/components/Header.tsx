import styles from './Header.module.css'

import ignitelogo from '../assets/ignite-logo.svg.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt="Logotipo do Ignite"/>
        </header>
    );
}