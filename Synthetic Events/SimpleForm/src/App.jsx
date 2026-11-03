
import { useState } from 'react';
import './App.css';

function App() {
  const [formState, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formState);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Simple React Form</h2>

        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
