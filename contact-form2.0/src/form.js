import './App.css';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"



function Form() {

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("form submitted", data)

    if (data) {
      navigate('/ThankYou')
    }
  }


  return (
    <div >
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container'>


          <div className='column1'>
            <img className='image' src="/images/mail.jpg" alt="Mail Image" />
          </div>

          <div className='column2'>
            <h2 className='contact-us'>Contact Us</h2>
            <div className='col2items'>

              <input
                {...register("firstName", {
                  required: "This field is required.", minLength: {
                    value: 2, message: "Minimum 2 characters required."
                  }
                })}
                type='text'
                id="firstName"
                className="input"
                placeholder='First Name'
              />
              <h4 className='error'>{errors.firstName?.message}</h4>


              <input
                {...register("lastName", {
                  required: "This field is required.", minLength: {
                    value: 2, message: "Minimum 2 characters required."
                  }
                })}
                type='text'
                id="lastName"
                className="input"
                placeholder='Last Name'
              />
              <h4 className='error'>{errors.lastName?.message}</h4>


              <input
                {...register("email", {
                  required: "Please enter a valid email.", pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Please enter a valid email."
                  }
                })}
                type='text'
                id="email"
                className="input"
                placeholder='Email'
              />
              <h4 className='error'>{errors.email?.message}</h4>



              <textarea
                {...register("message", { required: "This field is required." })}
                type='text'
                id="message"
                className="input-msg"
                placeholder='Message'
              />
              <h4 className='error'>{errors.message?.message}</h4>


              <Button
                type='submit'
                className='button'
                variant="outlined"
                style={{
                  borderRadius: '50px',
                  border: '1px solid lightgray',
                  height: '50px',
                  backgroundColor: "lightblue",
                  width: '40%', marginLeft: '30%',
                  marginBottom: "10%",
                  marginTop: '5%'
                }}

              >Send</Button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}


export default Form;
