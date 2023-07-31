import Image from "next/image";
import styles from "@/styles/hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <h1>Unlock Your Potential 💪</h1>
        <h2>Explore a World of Knowledge with Our Video Course Platform!</h2>
        <p>
          Embark on a Journey of Lifelong Learning with Our Comprehensive Video
          Course Platform! Discover a Vast Library of Premium and Free Courses,
          and Unleash Your Full Potential with Expert Instruction and
          Interactive Content.
        </p>
        <Link href="/courses">
          <button>Let&apos;s Start</button>
        </Link>
      </div>
      <div className={styles.hero__image}>
        <Image src="/hero_image.svg" alt="svg image" width={420} height={420} />
      </div>
    </div>
  );
}
