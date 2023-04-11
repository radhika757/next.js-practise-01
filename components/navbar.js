import Link from "next/link";
import styles from '../styles/navbar.module.css';
const Navbar = () => {
  return (
    <div>
      <div  className={styles.navbar}>
        <Link href='/'>Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contactus">Contact Us</Link>
      </div>
    </div>
  );
};
export default Navbar;
