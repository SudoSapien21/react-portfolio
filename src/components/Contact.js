import React, { useState } from 'react';

function Contact() {


  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    // Check if name, email, and message are empty
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    // Check if email is valid using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      // Submit the form data or handle form submission as needed
      // For example, you can send the data to a server or display a success message
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <footer>
        <p>&copy; 2023 Thank You For Visiting </p>
        <a href="https://github.com/SudoSapien21" target="_blank" rel= "Sudo"> Github: SudoSapien21</a>  
      </footer>
    </div>
  );
}

export default Contact;
