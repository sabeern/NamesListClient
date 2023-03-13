import { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import axios from "axios";

function App() {
  const [studentList, setStudentList] = useState([]);
  const fetchData = async () => {
    try {
      const studentDetails = await axios.get("http://localhost:3000");
      setStudentList(studentDetails.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <StudentList data={studentList} />;
}

export default App;
