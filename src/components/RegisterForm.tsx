import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const onNameChanged = (e: any) => setName(e.target.value);
  const onEmailChanged = (e: any) => setEmail(e.target.value);
  const onAgeChanged = (e: any) => setAge(e.target.value);
  const onPasswordChanged = (e: any) => setPassword(e.target.value);

  const canSave = [name, email, parseInt(age) >= 18, password].every(Boolean);

  const token = localStorage.getItem('token');

  const registerUser = (e: any) => {
    e.preventDefault();
    if (parseInt(age) >= 18) {
      const params = {
        name: name,
        email: email,
        age: age,
        password: password,
      };
      axios.post('http://localhost:4000/register', params).then((response) => {
        localStorage.setItem('token', response.data.accessToken);
        setIsLogged(true);
        return;
      });
    }
    setError('You are to young to use this website, sorry');
  };

  return (
    <>
      {token && <Navigate to='/' />}
      {isLogged && <Navigate to='/' />}

      <form onSubmit={registerUser}>
        <label htmlFor='userName'>Name</label>
        <input
          type='text'
          name='userName'
          id='userName'
          value={name}
          onChange={onNameChanged}
          required
        />
        <label htmlFor='userEmail'>Email</label>
        <input
          type='email'
          name='userEmail'
          id='userEmail'
          value={email}
          onChange={onEmailChanged}
          required
        />
        <label htmlFor='userAge'>Age</label>
        <input
          type='number'
          name='userAge'
          id='userAge'
          value={age}
          onChange={onAgeChanged}
          required
        />
        <label htmlFor='userPassword'>Password</label>
        <input
          type='password'
          name='userPassword'
          id='userPassword'
          value={password}
          onChange={onPasswordChanged}
          required
        />
        <p>You must be 18 or older to use this website</p>
        {error && <p>{error}</p>}
        <button disabled={!canSave}>Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
