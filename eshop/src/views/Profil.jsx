import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userAction as setUser} from "../reducer/user.js"
export default function Profil() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ ...user });

  const formInfo = [
    {
      type: "text",
      name: "firstname",
      label: "First Name",
    },
    {
      type: "text",
      name: "lastname",
      label: "Last Name",
    },
    {
      type: "email",
      name: "email",
      label: "Email",
    },
  ];

  const saveUser = (e) => {
  e.preventDefault();
  dispatch({ type: setUser.setUser, payload: formData });
  setFormData({
    firstname:'',
    lastname:'',
    email:'',
  });
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
    <div className="form">
      <h2>Hi {user.firstname}</h2>
      <h3>Customize your profil here</h3>
      <form onSubmit={saveUser}>
        {formInfo.map((field) => (
          <div className="formLabel" key={field.name}>
            <label htmlFor={field.name}>{field.label} : </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              
              value={formData[field.name]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="submit" className="buttonform">
            Save
        </button>
      </form>
      </div>
    </>
  );
}
