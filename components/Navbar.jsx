"use client";
import Link from "next/link";
import styles from "@/styles/navbar.module.scss";
import { useGlobalContext } from "@/utils/useContext";
import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Navbar({ user }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const creatingAvatar = (email) => {
    if (!email) return;
    return email[0].toUpperCase();
  };

  const { userDetails, login, search, setSearch } = useGlobalContext();

  useEffect(() => {
    login(user);
  }, [user]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

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
            <Link href="/courses">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Link>
          </li>
          <li>
            <a href="#">Pro</a>
          </li>
          {!userDetails ? (
            <li>
              <Link href={"/auth"}>Login</Link>
            </li>
          ) : (
            <div className={styles.avatar__dropdown}>
              <div className={styles.avatar}>
                {creatingAvatar(userDetails?.email)}
              </div>
              <div className={styles.dropdown}>
                <li>{userDetails?.email}</li>
                <li onClick={signOut}>Logout</li>
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
