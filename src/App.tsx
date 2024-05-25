import React, {useEffect, useState} from "react";
import {getCourses} from "./api/api";
import "./App.scss";
import {Loader} from "./components/loader";
import {EmptyComponent} from "./components/empty";
import {useGroupedCourses} from "./hooks/useGroupedCourses";
import {Course} from "./types/types";
import {Sidebar} from "./components/sidebar";
import Main from "./components/main";

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {coursesData, coursesHeader, activeTabKey} = useGroupedCourses(courses);
  const [tab, setTab] = useState<string>(activeTabKey);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCourses();
        setCourses(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error("error");
      }
    };

    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!courses) {
    return <EmptyComponent />;
  }

  return (
    <div className="courses-app">
      <div className="container">
        <div className="common">
          <Sidebar header={coursesHeader} tab={tab} setTab={setTab} />
          <Main data={coursesData[tab]} />
        </div>
      </div>
    </div>
  );
};

export default App;
