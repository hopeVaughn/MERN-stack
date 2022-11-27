import { useState, useEffect } from 'react';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';



const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name input */}
        <div className="form-row">
          <label htmlFor="name" className='form-label'>
            name
          </label>
          <input type="text" value={values.name} name='name' onChange={handleChange} className="form-input" />
        </div>
        <button type='submit' className='btn btn-block'>Submit</button>
      </form>
    </Wrapper>
  )
}
export default Register