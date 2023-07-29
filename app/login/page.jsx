"use client";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
  };
  return (
    <div className={styles.login_container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">Log In</button>
      </form>
      <div className="">
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
