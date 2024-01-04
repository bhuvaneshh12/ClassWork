import React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <form>
        <center>
          <h3>Bio Data</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Roll Number :</label>
                </td>
                <td>
                  <input type='text'></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name :</label>
                </td>
                <td>
                  <input type='text'></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Date of Birth</label>
                </td>
                <td>
                  <input type='date'></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input type='email'></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone Number :</label>
                </td>
                <td>
                  <input type='number'></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender :</label>
                </td>
                <td>
                  <div>
                    Male<input type='radio'></input> Female
                    <input type='radio'></input>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Hobbies :</label>
                </td>
                <td>
                  <input type='checkbox'></input>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </form>
    </div>
  );
}