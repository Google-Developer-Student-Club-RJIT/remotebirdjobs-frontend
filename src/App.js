import './App.css';
import Navbar from './Components/Navbar';
import TweetContainer from './Components/TweetContainer.js';
import { useEffect, useState } from 'react';


function App() {

  let date = new Date().toJSON().slice(0, 10)
  const [form, SetForm] = useState({
    topic: "ReactJs", type: "false", startDate: "2022-09-08", endDate: date
  });
  const [loading, setLoading] = useState([false]);
  let key, value;
  useEffect(() => {

  }, [form])

  const handleForm = (e) => {
    key = e.target.name
    value = e.target.value
    SetForm({ ...form, [key]: value })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 11000);
    console.log(form)
  }

  return (
    <>
      <Navbar handleForm={handleForm} form={form}></Navbar>
      <TweetContainer form={form} loading={loading} setLoading={setLoading}></TweetContainer>
    </>
  );
}

export default App;
