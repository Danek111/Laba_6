import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Reg({ propName, propPassword, propEmail, account, setAccount }) {
  const [name, setName] = useState(propName);
  const [password, setPassword] = useState(propPassword);
  const [email, setEmail] = useState(propEmail);
  const [nameIsValid, setNameIsValid] = useState(validateName(name));
  const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));
  const [emailIsValid, setEmailIsValid] = useState(validateEmail(propEmail));

  function validateEmail(email) {
    const regExp = /.+@.+\..+/i;
    if (email.match(regExp)) {
      return true;
    }
  }

  function validateName(name) {
    return name.length >= 4;
  }
  function validatePassword(password) {
    return +password.length >= 4;
  }
  function onNameChange(e) {
    const val = e.target.value;
    const valid = validateName(val);
    setName(val);
    setNameIsValid(valid);
  }
  function onPasswordChange(e) {
    const  val = e.target.value;
    const  valid = validatePassword(val);
    setPassword(val);
    setPasswordIsValid(valid);
  }
  function onEmailChange(e) {
    const  val = e.target.value;
    const  valid = validateEmail(val);
    setEmail(val);
    setEmailIsValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nameIsValid === true && passwordIsValid === true && emailIsValid === true) {
      setAccount([...account, { id: uuid(), name: name, password: password }]);
    }
  }

const  nameColor = nameIsValid === true ? 'green' : 'red';
const  passwordColor = passwordIsValid === true ? 'green' : 'red';
const  emailColor = emailIsValid === true ? 'green' : 'red';

const navigate = useNavigate();
  return (
    <div className='container'>
      <button className='btnD' onClick={() => navigate(-1)}></button>
      <form onSubmit={handleSubmit}>
        <p><label>Имя:<br />
          <input className = "inputs" value={name} onChange={onNameChange} style={{ borderColor: nameColor }}/>
        </label>
        </p>
        <p>
          <label>Почта:<br />
          <input className = "inputs" value={email} onChange={onEmailChange} style={{ borderColor: emailColor }}/>
          </label>
        </p>
        <p>
          <label>Пароль:<br />
          <input className = "inputs" value={password} onChange={onPasswordChange} style={{ borderColor: passwordColor }}/>
          </label>
        </p>
        <input type="submit" className = "btnTITLE" value="Зарегистрироваться" />
      </form>
    </div>
  );
}

export default Reg;
