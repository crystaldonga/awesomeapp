import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  // const[fullname,statename] = useState("");
  // const[lnameo,fnameo] = useState("");
  // const[lastname,statename1]=useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target;

    setFullName((preValue) => {
      //console.log(preValue);
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email:preValue.email,
          phone:preValue.phone
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email:preValue.email,
          phone:preValue.phone
        };
      }
      else if (name === "email") {
        return {
          fname: preValue.fname,
          lname:preValue.lname,
          email:value,
          phone:preValue.phone
        };
      }
      else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email:preValue.email,
          phone:value
        };
      }
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
    alert("sumitted");
    // statename(name);
    // statename1(lnameo);
  };
  return (
    <>
      <form onSubmit={onSubmits}>
        <h1>
          Hello {fullName.fname} {fullName.lname}
        </h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
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

        <input
          type="text"
          placeHolder="Enter your email"
          name="email"
          onChange={inputEvent}
          value={fullName.email}
        />
        <input
          type="text"
          placeHolder="Enter your phone"
          name="phone"
          onChange={inputEvent}
          value={fullName.phone}
        />
        <button type="submit">Click me</button>
      </form>
    </>
  );
};

export default App;
