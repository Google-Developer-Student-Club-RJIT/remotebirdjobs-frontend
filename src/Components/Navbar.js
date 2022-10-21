import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Navbar.css";
import Logo from "./../Remote Bird Jobs-UI/Logo.svg";
import Divider from "@mui/material/Divider";

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
        <div><label className="date">Date </label></div>
        <div style={{ maxWidth: "200px", padding: "0px" }}>
          <DatePicker
            id="Start"
            className="start"
            name="startDate"
            value={form.startDate}
            selected={new Date(form.startDate)}
            onChange={(date, event) => {
              form.startDate = date.toISOString().split("T")[0];
              form.name = "startDate";
              handleForm(event);
            }}
          />
        </div>
        <div className="to">to</div>
        <div style={{ maxWidth: "200px", padding: "0px" }}>
          <DatePicker
            id="End"
            className="end"
            name="endDate"
            value={form.endDate}
            selected={new Date(form.endDate)}
            onChange={(date, event) => {
              form.endDate = date.toISOString().split("T")[0];
              form.name = "endDate";
              handleForm(event);
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
            if(newValue=="Work from Home"){
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
