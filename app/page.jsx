import Hero from "@/components/HeroSection/Hero";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import FeaturedCourses from "@/components/FeaturedCourses/FeaturedCourses";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
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
      </div>
      {/* ------ */}

      <Footer />
    </main>
  );
}
