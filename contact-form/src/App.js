import './App.css';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


function App() {
  return (
    <div >


      <div className='container'>


        <div className='column1'>
          <img className='image' src="/images/mail.jpg" alt="Mail Image" />
        </div>

        <div className='column2'>
          <Typography sx={{ fontFamily: "Georgia", fontSize: '50px' }}>Get in touch</Typography>
          <div className='col2items'>

            <input
              type='text'
              className="input"
              placeholder='First Name'
            />

            <input
              type='text'
              className="input"
              name='lastname'
              id='lnmae'
              placeholder='Last Name'
            />

            <input
              type='text'
              className="input"
              name='emailaddress'
              id='email'
              placeholder='Email'
            />


            <textarea
              type='text'
              className="input-msg"
              name='message'
              id='msg'
              placeholder='Message'
            />

            <Button
              className='button'
              variant="outlined"
              style={{
                borderRadius: '50px',
                border: '1px solid lightgray',
                height: '50px',
                backgroundColor: "lightblue",
                width: '40%', marginLeft: '30%'
              }} >Send</Button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
