import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})



  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    let errors = {
      email: "",
      firstName: "",
      lastName: "",
      message: ""
    }

    let noErrors = true

    if (!firstName) {
      errors.firstName = "Please enter a first name "
      noErrors = false
    }

    if (!lastName) {
      errors.lastName = "Please enter a last name "
      noErrors = false

    }
    if (!email || !email.includes('@')) {
      errors.email = "Please enter a valid email address"
      noErrors = false
    }
    if (!message) {
      errors.message = "Please enter a message "
      noErrors = false

    }

    setErrors(errors)

    if (noErrors) {
      alert('form submitted! Thank you!')
    }

  }



  return (
    <div >

      <form className='form-container'>
        <div className='container'>


          <div className='column1'>
            <img className='image' src="/images/mail.jpg" alt="Mail Image" />
          </div>

          <div className='column2'>
            <Typography sx={{ fontFamily: "Georgia", fontSize: '50px' }}>Get in touch</Typography>
            <div className='col2items'>

              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                value={firstName}
                className="input"
                placeholder='First Name'
                required='true'
              />
              {errors.firstName && <p className='error'>{errors.firstName}</p>}

              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className="input"
                value={lastName}
                name='lastname'
                id='lnmae'
                placeholder='Last Name'
              />
              {errors.lastName && <p className='error'>{errors.lastName}</p>}

              <input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                className="input"
                value={email}
                name='emailaddress'
                id='email'
                placeholder='Email'
              />
              {errors.email && <p className='error'>{errors.email}</p>}


              <textarea
                onChange={(e) => setMessage(e.target.value)}
                type='text'
                className="input-msg"
                name='message'
                id='msg'
                placeholder='Message'
              />
              {errors.message && <p className='error'>{errors.message}</p>}

              <Button
                className='button'
                variant="outlined"
                style={{
                  borderRadius: '50px',
                  border: '1px solid lightgray',
                  height: '50px',
                  backgroundColor: "lightblue",
                  width: '40%', marginLeft: '30%',
                  marginBottom:"10%"
                }}

                onClick={handleSubmit}>Send</Button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}


export default App;
