"use client";
import styles from "@/styles/featuredCourses.module.scss";
import { CoursesDetails } from "@/courseData";
import Card from "./Card";
import { useGlobalContext } from "@/utils/useContext";

export default function FeaturedCourses() {
  const { userDetails } = useGlobalContext();
  let user = userDetails;
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
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
                user={user}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
