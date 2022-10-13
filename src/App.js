import "./App.css";
import Navbar from "./Components/Navbar";
import TweetContainer from "./Components/TweetContainer.js";
import { useState } from "react";

function App() {
  let date = new Date().toJSON().slice(0, 10);
  const [form, SetForm] = useState({
    topic: "ReactJs",
    type: "false",
    startDate: "2022-09-08",
    endDate: date,
  });

  const handleForm = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    SetForm({ ...form, [key]: value });
    console.log(form);
  };

  return (
    <>
      <Navbar handleForm={handleForm} form={form}></Navbar>
      <TweetContainer form={form}></TweetContainer>
    </>
  );
}

export default App;
