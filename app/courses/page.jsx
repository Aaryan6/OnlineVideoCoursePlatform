"use client";
import Footer from "@/components/Footer";
import styles from "@/styles/featuredCourses.module.scss";
import { CoursesDetails } from "@/courseData";
import Card from "@/components/Card";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { useGlobalContext } from "@/utils/useContext";

export default function Courses() {
  const { userDetails, search } = useGlobalContext();
  let user = userDetails;
  return (
    <main className={styles.main}>
      <Link href={"/"}>
        <div className={styles.back__button}>
          <BsArrowLeft />
          <button>Back</button>
        </div>
      </Link>

      {/* {courses details} */}
      <div className={styles.container}>
        <h1>Courses</h1>
        <div className={styles.courses}>
          {CoursesDetails.filter((c) =>
            c.course_name.toLowerCase().includes(search.toLowerCase())
          ).map((course) => {
            return (
              <Card
                key={course.id}
                name={course.course_name}
                desc={course.description}
                image={course.image_link}
                type={course.course_type}
                user={user}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
