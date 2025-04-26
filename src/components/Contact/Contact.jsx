import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaPhone, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.contacts}>
        <p>
          <FaUser style={{ marginRight: "8px" }} />
          {contact.name}
        </p>
        <p>
          <FaPhone style={{ marginRight: "8px", transform: "scaleX(-1)" }} />
          {contact.number}
        </p>
      </div>
      <button
        className={s.delete}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
