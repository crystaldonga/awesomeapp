import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });
  // const[fullname,statename] = useState("");
  // const[lnameo,fnameo] = useState("");
  // const[lastname,statename1]=useState("");

  const inputEvent = (event) => {
   console.log(event.target.value);
   console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      //console.log(preValue);
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
    //alert("sumitted");
    // statename(name);
    // statename1(lnameo);
  };
  return (
    <>
      <form onSubmit={onSubmits}>
        <h1>
          Hello {fullName.fname} {fullName.lname}{" "}
        </h1>
        <input
          type="text"
          placeHolder="Enter your fname"
          name="fname"
          onChange={inputEvent}
          value={fullName.fname}
        />
        <br />
        <input
          type="text"
          placeHolder="Enter your lname"
          name="lname"
          onChange={inputEvent}
          value={fullName.lname}
        />
        <button type="submit">Click me</button>
      </form>
    </>
  );
};

export default App;
