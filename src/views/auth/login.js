import React from 'react'
import { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,CLink,
  CRow,CImg,CAlert,CInvalidFeedback,CInputGroupAppend
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Login = () => {
  const history = useHistory();

  const [state,setState] = useState({
    username : '',
    password: ''
  })

  const handleChange = (e) =>{
    var {name, value} = e.target;
    console.log(value)
    setState(prevState => ({
      ...prevState,
      [name] : value,
    }))
  }

  const handleLogin = () =>{
    console.log(state.username)
    if(state.username === 'superadmin' && state.password === 'P@ssw0rd'){
      localStorage.setItem('user_access', state.username);
      history.push("/dashboard");
    }else{
      alert("Invalid credentials.")
    }
  }

  const handleKeyPress = (evt) => {
    if (["Enter"].includes(evt.key)) {
      evt.preventDefault();
        handleLogin();
    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput name="username" type="text" placeholder="Username" onKeyPress={handleKeyPress} onChange={handleChange} autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput name="password" type="password" placeholder="Password" onKeyPress={handleKeyPress}  onChange={handleChange} autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={() => handleLogin()}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Chatbot Management</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>

                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
