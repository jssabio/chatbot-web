import React,{ useEffect,useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CInput,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CCardFooter,CTooltip
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import CIcon from '@coreui/icons-react'

const  Configurations = () =>{
  const history = useHistory();
  const [warning, setWarning] = useState(false)
  const [config_list, setConfigList] = useState()
  const [edit,setEdit] = useState(true)

  const configs = [
    {id: 0, name: 'Default Password', description: 'Default password for Reset Password', config_value: 'P@ssw0rd'},
    //{id: 1, name: 'Default Password', Description: 'Default password for Reset Password', value: 'P@ssw0rd'},
    ]





  const updateFieldChanged = index => e => {


    let newArr = [...configs];
    const input = e.target.value;
    const regex = new RegExp(newArr[index].config_regex ,"g");
    newArr[index].config_value = input.replace(regex,'')
    setConfigList(newArr);

    console.log(input)
  }

  const handleSubmit = () => {

    let config_inputs = [...configs]

    // config_inputs.map((object, index) => (

    //   //updateConfig(object.id, object)

    // ))

    // setWarning(!warning);
  }



  return(

    <CRow>
        <CCol>

          <CCard>
            <CCardHeader>
              Settings

                <div className="card-header-actions">
                <CTooltip content="Edit Settings">
                  <CButton  size="sm" className="btn-brand mr-1 mb-1" color="primary" onClick={() => setEdit(!edit)}>
                    <CIcon name="cil-pencil" /> Edit Settings
                 </CButton></CTooltip>
                </div>
            </CCardHeader>

            <CCardBody>

                <CDataTable
                items={configs}
                fields={[
                {key: 'name', label: 'Config Name' },
                {key: 'description', label: 'Description' },
                {key: 'config_value', label: 'Config Value' },
                ]}
                hover
                striped
                scopedSlots={{
                  'config_value':
                    (item, index) => (
                      <td key={item.config_value}>
                        <CInput disabled={edit} id={item.config_value} name={item.config_value} onChange={updateFieldChanged(index)} value={item.config_value} autoComplete="off"/>
                      </td>
                    )
                }}
                />



            </CCardBody>
            <CCardFooter>
              <CButton hidden={edit} color="primary" onClick={() => setWarning(!warning)}>Submit</CButton>
            </CCardFooter>
            </CCard>
            <CModal
              show={warning}
              onClose={() => setWarning(!warning)}
              color="warning"
            >
              <CModalHeader closeButton>
                <CModalTitle>Do you want to continue?</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <b>Warning:</b> You are about to update a config.<br/>
				        Would you like to update this config/s?
              </CModalBody>
              <CModalFooter>
                <CButton color="warning" onClick={handleSubmit} >Update</CButton>{' '}
                <CButton color="gray" onClick={() => setWarning(!warning)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
      </CCol>
      </CRow>

  )
}

export default Configurations
