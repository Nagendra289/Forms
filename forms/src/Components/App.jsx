import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [con, setCon] = useState("");
  const [gender, setGender] = useState("");
  const [sub, setSub] = useState({
    JS: true,
    React: false,
    Angular: false,
  });
  const [res, setRes] = useState("");
  const [sel, setSel] = useState("");
  const [abt, setAbt] = useState("");
  function changePage() {
    console.log(fname, lname, email, con, sub, res, sel, abt);
  }
  function reset() {
    setFname("");
    setLname("");
    setEmail("");
    setCon("");
    setGender("male");
    setSub({
      JS: true,
      React: false,
      Angular: false,
    });
    setRes("");
    setSel("");
    setAbt("");
  }
  return (
    <div>
      <h1>Survey Form</h1>
      <form>
        <label>FirstName:* </label>
        <input
          onChange={(event) => {
            setFname(event.target.value);
          }}
          type="text"
          name="FirstName"
          placeholder=" Enter FirstName"
          value={fname}
        ></input>
        <label>LastName: * </label>
        <input
          onChange={(event) => {
            setLname(event.target.value);
            // console.log(lname);
          }}
          type="text"
          name="LastName"
          placeholder="Enter LastName"
        ></input>
        <label>Enter E-mail: </label>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          name="email"
          placeholder="Enter Email"
        ></input>
        <label>Contact :</label>
        <input
          onChange={(event) => {
            setCon(event.target.value);
          }}
          type="text"
          name="Contact"
          placeholder="Enter Mobile number"
        ></input>
        <label for="gender">Gender: </label>
        <input
          checked={gender === "male"}
          onChange={(event) => {
            setGender(event.target.value);
          }}
          type="radio"
          name="gender"
          value="male"
        />
        Male
        <input
          checked={gender === "female"}
          onChange={(event) => {
            setGender(event.target.value);
          }}
          type="radio"
          name="gender"
          value="female"
        />
        Female
        <label>Your Best Subject: </label>
        <input
          name="JS"
          id="JS"
          type="checkbox"
          //checked={sub.JS === true}
          onChange={(event) => {
            setSub(event.target.value);
          }}
        />
        JS
        <input
          type="checkbox"
          name="React"
          // checked={sub.maths === true}
          onChange={(event) => {
            setSub(event.target.value);
          }}
        />
        React
        <input
          onChange={(event) => {
            setSub(event.target.value);
          }}
          type="checkbox"
          name="Angular"
        />
        Angular
        <label>Upload Resume: </label>
        <input
          onChange={(event) => {
            setRes(event.target.files);
          }}
          type="file"
          placeholder="Enter upload file"
          required
        />
        <label>Enter Url: </label>
        <input type="URL" name="FirstName" placeholder="Enter URL"></input>
        <label for="select">Select Your Choice: </label>
        <select
          onChange={(event) => {
            setSel(event.target.value);
          }}
          name="select"
          placeholder="select your Ans"
          required
        >
          <option value="" disabled selected={sel === ""}>
            Select your Ans
          </option>
          <option value={sel} selected={sel === "beginner"}>
            beginner
          </option>
          <option value={sel} selected={sel === "beginner"}>
            Advanced
          </option>
        </select>
        <label>About</label>
        <textarea
          onChange={(event) => {
            setAbt(event.target.value);
          }}
          type="textarea"
          name="About"
          placeholder="About yourself"
          value={abt}
        ></textarea>
        <label>Submit or Reset</label>
        <button onClick={changePage}>submit</button>{" "}
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  );
}
export default App;
