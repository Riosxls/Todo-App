import { Rocket } from '@phosphor-icons/react';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.heading}>
        <Rocket size={50} color="#d1d1d1" />
        <p>
          to<em>do</em>
        </p>
      </div>
    </header>
  );
}

export default Header;
