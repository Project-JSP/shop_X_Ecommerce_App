import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './login.css'



function Login({ isLoggedin, setIsLoggedin }) {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let navigate = useNavigate()

  const login = (e) => {
      e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('psw', password);
    setIsLoggedin(true);
    navigate('/')
  };
  let username = localStorage.getItem('name');

  const logout = () => {
    localStorage.removeItem('name');
    setIsLoggedin(false);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {!isLoggedin ? (
          <>
            {/* <form action="">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <button type="submit" onClick={login}>
              GO
            </button>
          </form> */}
            <MDBContainer className="my-5">
              <MDBCard>
                <MDBRow className='g-0'>
                  <MDBCol md='6'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBCardBody className='d-flex flex-column'>
                      <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                        <span className="h1 fw-bold mb-0">shop-X</span>
                      </div>
                      <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Login to your account</h5>

                      <MDBInput wrapperClass='mb-4' label='Username'
                        onChange={(e) => setName(e.target.value)}
                        value={name} required id='formControlLg' type='text' size="lg" />

                      <MDBInput wrapperClass='mb-4' label='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} id='formControlLg' type='email' size="lg" />

                      <MDBInput wrapperClass='mb-4' label='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} id='formControlLg' type='password' size="lg" />

                      <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={login}>Login</MDBBtn>
                      <a className="small text-muted" href="#!">Forgot password?</a>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBContainer>
          </>
        ) : (
          <>
            <h1>User is logged in</h1>
            {username}
            <button onClickCapture={logout}>logout user</button>
          </>
        )}
      </div>
    </>
  )
}

export default Login