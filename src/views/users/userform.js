import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,

  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const UserForm = () => {

  const [state,setState] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const handleChange = (e) =>{
      var {name, value} = e.target;
      console.log(value)
      setState(prevState => ({
        ...prevState,
        [name] : value,
      }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(JSON.stringify({
      username: state.username,
      email: state.email,
      password: state.password,
      confirmpassword: state.confirmpassword
    }))
  }
  return (
    <>
      <CRow>
      <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              User Form
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Username</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" id="username" name="username" onChange={handleChange} value={state.username}/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Email</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="email" id="email" name="email" onChange={handleChange} value={state.email}/>

                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Password</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password" name="password" onChange={handleChange} value={state.password}/>

                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Confirm Password</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="confirmpassword" name="confirmpassword" onChange={handleChange} value={state.confirmpassword}/>

                  </CInputGroup>
                </CFormGroup>
                <CFormGroup className="form-actions">
                  <CButton type="button" size="sm" color="primary" onClick={(e) => handleSubmit(e)}>Submit</CButton>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserForm
