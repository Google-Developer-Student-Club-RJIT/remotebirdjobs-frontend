import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Navbar.css";
import Logo from "./Logo.svg";

const Navbar = (props) => {
  let { form, handleForm } = props;
  const topics = [
    "Android",
    "C",
    "CSS",
    "Clojure",
    "Cofeescript",
    "Cpp",
    "Crystal",
    "Django",
    "Elixir",
    "Go",
    "Java",
    "JavaScript",
    "Julia",
    "Kotlin",
    "Linux",
    "MERN",
    "NodeJS",
    "PHP",
    "Powershell",
    "Python",
    "ReactJS",
    "Roslyn",
    "Ruby",
    "Rust",
    "Scala",
    "Spring",
    "Swift",
    "TypeScript",
  ];
  const [value, setValue] = React.useState("ReactJS");
  const [wvalue, setWvalue] = React.useState("Work from Office");
  const [startDate, setStartDate] = React.useState(new Date(form.startDate));
  const [endDate, setEndDate] = React.useState(new Date(form.endDate));
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="container">
      <div className="r0">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="r1">
        <label className="topic">Topic</label>
        <Autocomplete
          name="topic"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            form.topic = newValue;
            handleForm(event);
          }}
          disableClearable
          id="Topic"
          options={topics}
          className="dropdown"
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="r2">
        <div ><label className="date">Date Range </label></div>
        <div style={{ maxWidth: "600px", padding: "0px" }}>
          <DatePicker
            id="Start"
            className="start"
            name="startDate"
            selected={startDate}
            onChange={(date, event) => {
              console.log(date)
              onChange(date)
              form.startDate = date[0].toISOString().split("T")[0];
              form.name = "startDate";
              handleForm(event)
              if (date[1]) {
                form.endDate = date[1].toISOString().split("T")[0];
                form.name = "endDate";
                handleForm(event)
              }
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="dd/MM/yyyy"
            onKeyDown={(e) => {
              e.preventDefault();
           }}
          />
        </div>
      </div>
      <div className="r3">
        <div className="type">Job Type</div>
        <Autocomplete
          name="type"
          value={wvalue}
          onChange={(event, newValue) => {
            setWvalue(newValue);
            if(newValue==="Work from Home"){
                form.type = true;
            }else{
                form.type = false;
            }
            handleForm(event);
          }}
          disableClearable
          id="type"
          options={["Work from Home", "Work from Office"]}
          className="wfh"
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </div>
  );
};

export default Navbar;
