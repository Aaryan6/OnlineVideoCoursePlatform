import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href={"/"}>
          <h2>Intellify</h2>
        </Link>
      </div>
      <div className={styles.navbar__links}>
        <ul>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <input type="text" placeholder="Search..." />
          </li>
          <li>
            <a href="#">Pro</a>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
