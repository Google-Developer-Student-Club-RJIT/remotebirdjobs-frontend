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
  const [checked, setChecked] = React.useState(false);
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
              onChange(date)
              form.startDate = date[0].toISOString().split("T")[0];
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
            maxDate={new Date()}
            onKeyDown={(e) => {
              e.preventDefault();
           }}
          />
        </div>
      </div>
      <div className="r3">
        <input
          type="radio"
          id="type"
          name="type"
          className="wfh"
          value={!checked}
          checked={checked}
          onClick={(event) => {
            if (checked) {
              setChecked(false);
              form.type = false;
            } else {
              setChecked(true);
              form.type = true;
            }
            handleForm(event);
          }}
        />
        Work from Home
      </div>
    </div>
  );
};

export default Navbar;
