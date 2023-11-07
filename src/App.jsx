import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import Menu from './Menu.jsx';
import Name from './Name';
import Service from './Service';
import User from './User';
import Home from './Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:fname/:lname" element={<User />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact name="contact" />} />
      <Route path="/service" element={<Service />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/name" element={<Name />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
