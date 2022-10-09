import './App.css';
import Navbar from './Components/Navbar';
import TweetContainer from './Components/TweetContainer.js';
import { useState } from 'react';

function App() {
  
  const [form, SetForm] = useState({
    topic:"ReactJs",type:"Both",startDate:"2022-09-08",endDate:"2022-10-08"
  });
  
  let key, value;

  const handleForm = (e) => {
    key = e.target.name
    value = e.target.value
    SetForm({ ...form, [key]: value })
  }
  
  const handleSubmit = async (event) => {
    const formData = {
        topic: form.topic,
        type: form.type,
        startDate: form.startDate,
        endDate: form.endDate,
    }
    console.log(formData)
}
  return (
    <>
      <Navbar handleForm={handleForm} form={form} handleSubmit={handleSubmit}></Navbar>
      <TweetContainer form={form}></TweetContainer>
    </>
  );
}

export default App;
