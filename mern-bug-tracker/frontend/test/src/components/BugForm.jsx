import { useState } from "react";
import axios from "axios";

const BugForm = ({ onBugAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/test", { title, description });
    onBugAdded(res.data);
    setTitle("");
    setDescription("");
    }catch(error){
       alert("Failed to report bug: " + (error.response?.data?.error || error.message));
    
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>TESTING BUGS</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bug Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">Report Bug</button>
    </form>
  );
};

export default BugForm;
