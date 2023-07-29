import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./page.module.scss";
import { CoursesDetails } from "@/courseData";

export default function Courses() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* {courses details} */}
      <div className={styles.container}>
        <h1>Courses</h1>
        <div className={styles.courses}>
          {CoursesDetails.map((course) => {
            return (
              <Card
                key={course.id}
                name={course.course_name}
                desc={course.description}
                image={course.image_link}
                type={course.course_type}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

const Card = ({ name, desc, image, type }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={300} height={300} />
      <div className={styles.card__info}>
        <div className={styles.card__content}>
          <div className={styles.title}>
            <h3>{name}</h3>
            <span>{type}</span>
          </div>
          <p>{desc}</p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
};