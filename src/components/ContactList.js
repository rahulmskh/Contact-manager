import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const {contacts, retrieveContacts, searchHandler, text, searchResults} = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, [contacts]);


  const renderContactList = (text.length < 1 ? contacts : searchResults).map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact._id}
      />
    );
  });

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  }

  return (
    <div className="main">
      <h2>
        Contact List
        </h2>
        
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
        <br></br>
        <br></br>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={text}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div>
    </div>
  );
};

export default ContactList;