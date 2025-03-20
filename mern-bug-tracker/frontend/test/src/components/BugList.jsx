import { useState, useEffect } from "react";
import axios from "axios";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/test").then((res) => setBugs(res.data));
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.title} - {bug.status} {bug.createdAt}</li>
      ))}
    </ul>
  );
};

export default BugList;
