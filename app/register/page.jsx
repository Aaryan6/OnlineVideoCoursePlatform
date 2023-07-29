"use client";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Register() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
  };
  return (
    <div className={styles.register_container}>
      <h2>Register</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />

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
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          id="cpassword"
          name="cpassword"
          placeholder="Enter password again"
          required
        />

        <button type="submit">Create</button>
      </form>
      <div className="">
        Already have an account? <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
