import React, { useState } from 'react';
import './Form.css';

export default function Form1() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    dob: '',
    gmail: '',
    phoneNumber: '',
    gender: '',
    hobbies: [],
    country: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      if (type === 'checkbox') {
        const newHobbies = checked
          ? [...prevData.hobbies, name]
          : prevData.hobbies.filter((hobby) => hobby !== name);

        return { ...prevData, hobbies: newHobbies };
      }

      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!formData.gmail.trim()) {
      newErrors.gmail = 'Gmail is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.gmail.trim())) {
      newErrors.gmail = 'Invalid email address';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (formData.hobbies.length === 0) {
      newErrors.hobbies = 'Select at least one hobby';
    }

    if (formData.country === 'Country') {
      newErrors.country = 'Select a valid country';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='div1'>
      <center>
        <h1>Bio Data</h1>
      </center>
      <table className='form'>
        <tbody>
          <tr>
            <td><label><b>Name</b></label></td>
            <td>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className='error'>{errors.name}</span>}
            </td>
          </tr>
          <tr>
            <td><label><b>Password</b></label></td>
            <td>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className='error'>{errors.password}</span>}
            </td>
          </tr>
          <tr>
            <td><label><b>D.O.B</b></label></td>
            <td>
              <input
                type='date'
                name='dob'
                value={formData.dob}
                onChange={handleChange}
              />
              {errors.dob && <span className='error'>{errors.dob}</span>}
            </td>
          </tr>
          <tr>
            <td><label><b>Gmail</b></label></td>
            <td>
              <input
                type='email'
                name='gmail'
                value={formData.gmail}
                onChange={handleChange}
              />
              {errors.gmail && <span className='error'>{errors.gmail}</span>}
            </td>
          </tr>
          <tr>
            <td><label><b>Phone Number</b></label></td>
            <td>
              <input
                type='tel'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <span className='error'>{errors.phoneNumber}</span>}
            </td>
          </tr>
          <tr>
            <td><label><b>Gender</b></label></td>
            <td>
              <input
                type='radio'
                name='gender'
                value='male'
                onChange={handleChange}
              />
              Male
              <input
                type='radio'
                name='gender'
                value='female'
                onChange={handleChange}
              />
              Female
              {errors.gender && <span className='error'>{errors.gender}</span>}
            </td>
          </tr>
          <tr>
            <td><label><b>Hobbies</b></label></td>
            <td>
              <input
                type='checkbox'
                name='Drawing'
                checked={formData.hobbies.includes('Drawing')}
                onChange={handleChange}
              />
              Drawing
              <input
                type='checkbox'
                name='Eating'
                checked={formData.hobbies.includes('Eating')}
                onChange={handleChange}
              />
              Eating
              <input
                type='checkbox'
                name='Sleeping'
                checked={formData.hobbies.includes('Sleeping')}
                onChange={handleChange}
              />
              Sleeping
              {errors.hobbies && <span className='error'>{errors.hobbies}</span>}
            </td>
          </tr>
          <tr>
            <td><label><b>Country</b></label></td>
            <td>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="France">France</option>
              </select>
              {errors.country && <span className='error'>{errors.country}</span>}
            </td>
          </tr>

          <tr>
            <td colSpan="2" align='center'>
              <button
                type="button"
                id='butten'
                style={{ width: '100px', height: '30px' }}
                onClick={handleSubmit}
              >
                <b>Submit</b>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* {Object.keys(errors).length > 0 && (
        <div className='validation-errors'>
          <p>Please fix the following errors:</p>
          <ul>
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${error}`}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}