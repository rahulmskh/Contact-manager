import React, { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";
import ContactDetail from "./ContactDetail";
import {ContactsCrudContextProvider} from "../context/ContactsCrudContext";


function App(props) {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);


  return (
    <div className="ui container">
      <Router>
      <Header/>
      <ContactsCrudContextProvider>
      <Routes>
        <Route
        exact
        path="/"
        element={ <ContactList /> }
        />
        <Route
        path="/add"
        element={<AddContact/> }
        />
        <Route
            path="/edit"
           element={<EditContact/>}
          />
           <Route path="/contact/:id" element={<ContactDetail/>} />
      </Routes>
      </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
