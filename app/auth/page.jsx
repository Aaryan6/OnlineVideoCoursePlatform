"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import styles from "@/styles/auth.module.scss";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <>
      <Link href={"/"}>
        <div className={styles.back__button}>
          <BsArrowLeft />
          <button>Back</button>
        </div>
      </Link>
      <div className={styles.container}>
        <h3>Intellify</h3>
        <Auth
          supabaseClient={supabase}
          view="magic_link"
          appearance={{ theme: ThemeSupa }}
          theme="light"
          showLinks={true}
          providers={["google"]}
          redirectTo="http://localhost:3001/auth/callback"
        />
      </div>
    </>
  );
}
