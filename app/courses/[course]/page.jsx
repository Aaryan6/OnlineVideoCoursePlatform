import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { CoursesDetails } from "@/courseData";
import Image from "next/image";
import styles from "./page.module.scss";

export default function CoursePage() {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <h1>Web Development 101</h1>
        <div className={styles.courses}>
          {CoursesDetails.map((course) => {
            return <Card key={course.id} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Card = () => {
  return (
    <div className={styles.card}>
      <iframe
        height={"200"}
        src="https://www.youtube.com/embed/PkZNo7MFNFg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
