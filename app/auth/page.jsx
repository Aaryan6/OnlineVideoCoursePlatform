"use client";
import styles from "@/styles/auth.module.scss";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useGlobalContext } from "@/utils/useContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("sign-in");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password.length < 6)
      return alert("Password must be at least 6 characters long");
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (res.error) {
      return alert(res.error.message);
    }
    setView("check-email");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (res.error) {
      return alert(res.error.message);
    }
    router.push("/");
    router.refresh();
  };

  const { userDetails } = useGlobalContext();
  if (userDetails?.email) {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <div className={styles.back__button}>
          <BsArrowLeft />
          <button>Back</button>
        </div>
      </Link>
      {view === "check-email" ? (
        <p className={styles.checkEmailText}>
          Check <span className={styles.bold}>{email}</span> to continue signing
          up
        </p>
      ) : (
        <form
          className={styles.form}
          onSubmit={view === "sign-in" ? handleSignIn : handleSignUp}
        >
          <label className={styles.textMd} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
          />
          <label className={styles.textMd} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="•••••••• ( min 6 characters )"
          />
          {view === "sign-in" ? (
            <>
              <button className={styles.submitButton}>Sign In</button>
              <p className={styles.optionText}>
                Don&rsquo;t have an account?
                <span
                  className={styles.optionLink}
                  onClick={() => setView("sign-up")}
                >
                  Sign Up Now
                </span>
              </p>
            </>
          ) : (
            <>
              <button className={styles.submitButton}>Sign Up</button>
              <p className={styles.optionText}>
                Already have an account?
                <span
                  className={styles.optionLink}
                  onClick={() => setView("sign-in")}
                >
                  Sign In Now
                </span>
              </p>
            </>
          )}
        </form>
      )}
    </div>
  );
}
