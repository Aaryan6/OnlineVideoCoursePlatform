import Hero from "@/components/Hero";
import styles from "@/styles/home.module.scss";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Link from "next/link";
export default async function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <FeaturedCourses />
      {/* about */}
      <div className={styles.about}>
        <h1>
          Intellify is all about <span>project-based</span> learning.
        </h1>
        <h3>
          We focus on real-world scenarios, cutting edge technologies, and
          problem solving.
        </h3>
        <Link href="/courses">
          <button>Explore Now</button>
        </Link>
      </div>
      {/* ------ */}

      <Footer />
    </main>
  );
}
