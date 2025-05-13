// frontend/src/pages/Signup.jsx
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3001/signup', form);
    alert(res.data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <input type="password" placeholder="Confirm Password" onChange={e => setForm({ ...form, confirmPassword: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
