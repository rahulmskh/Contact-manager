import React from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { _id, name, email } = props.contact;

  const {removeContactHandler} = useContactsCrud();

  const deleteContact = (_id) => {
    removeContactHandler(_id);
  }

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to = {`/contact/${_id}`}
          state={{contact: props.contact}} 
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => deleteContact(_id)}
      ></i>
      <Link 
      to={`/edit`}
      state={{ contact: props.contact } }>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;