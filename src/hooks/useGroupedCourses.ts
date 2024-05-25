import {useMemo} from "react";
import {Course} from "../types/types";

interface GroupedCoursesResult {
  coursesData: Record<string, Course[]>;
  coursesHeader: string[];
  activeTabKey: string;
}

export const useGroupedCourses = (courses: Course[]): GroupedCoursesResult => {
  const groupedCourses = useMemo(() => {
    const grouped = courses.reduce<Record<string, Course[]>>((acc, course) => {
      for (const tag of course.tags) {
        acc[tag] = acc[tag] || [];
        acc[tag].push(course);
      }
      return acc;
    }, {});

    const coursesData = {"Все темы": courses, ...grouped};
    return coursesData;
  }, [courses]);

  const coursesHeader = useMemo(
    () => Object.keys(groupedCourses),
    [groupedCourses]
  );

  const activeTabKey = "Все темы";

  return {
    coursesData: groupedCourses,
    coursesHeader,
    activeTabKey,
  };
};
