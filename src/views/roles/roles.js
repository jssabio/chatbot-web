import React,{ useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CTooltip
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import CIcon from '@coreui/icons-react'

const Roles = () => {

  const history = useHistory()
  const [checked, setChecked] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const toggleChecks = (index) => {
  const position = checkedList.indexOf(index)
  let newCheckedList = checkedList.slice()
    if (position !== -1) {
      newCheckedList.splice(position, 1)
    } else {
      newCheckedList = [...checkedList, index]
    }
    setCheckedList(newCheckedList)
  }

  const handleCheckChange = (e) => {
    const target = e.target;
    var value = target.value;
    const position = checked.indexOf(value);
    let newChecked = checked.slice();
    if (position !== -1) {
      newChecked.splice(position, 1);
    } else {
      newChecked = [...checked, value];
    }
    setChecked(newChecked);
  }


  const usersData = [
    {id: 0, role: 'Administrator', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
    {id: 1, role: 'Agent', registered: '2018/01/01', role: 'Member', status: 'Active'},
  ]

  return(

    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
               <CTooltip content="Add Role">
                <CButton
                  size="sm"
                  className="btn-brand mr-1 mb-1"
                  color="primary"
                  onClick={() => history.push("/users/addrole")}>
                      <CIcon name="cil-plus" /> Add Role
                </CButton>
              </CTooltip>
              <CTooltip content="Edit Role">
                      <CButton size="sm" className="btn-brand mr-1 mb-1" color="secondary" >
                        <CIcon name="cil-lock-unlocked" /> Edit Role
                      </CButton>
              </CTooltip>
                <div className="card-header-actions">
                  <CTooltip content="Delete Role">
                      <CButton size="sm" className="btn-brand mr-1 mb-1" color="danger" >
                        <CIcon name="cil-trash" /> Delete Role
                      </CButton>
                  </CTooltip>
                </div>
            </CCardHeader>

            <CCardBody>
              {/* {usersContent} */}

            {/* {users.loading ?
                 <div className="d-flex justify-content-center">
                     <div className="spinner-border" role="status">
                     </div>
                 </div>
            : */}
              <CDataTable
              items={usersData}
              fields={[{key: 'id', label: '',sorter: false},
              {key: 'role', label: 'Role' },
              // {key: 'fullname', label: 'Fullname' },
              // {key: 'profilename', label: 'Profile' },
              // {key: 'isactive', label: 'Active?',sorter: false },
              // {key: 'Actions', label:'',sorter: false }
            ]}
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              striped
              pagination
              scopedSlots = {{

                'id':
                (item,index)=>(
                  <td>
                    <input
                      type="checkbox"
                      id={`id-` + item.id}
                      name={"id-" + index}
                      value={item.id}
                      onChange={handleCheckChange}
                      onClick={()=>{toggleChecks(index)}}
                      checked = {checkedList.includes(index) ? true : false}
                      // disabled = {item.role === 'root' ? true : false}
                      // hidden = {item.role === 'root' ? true : false}
                      // hidden={item.role === 'root' ? true : access.filter(a => a.module.includes('accounts')).length === 1 ?
                      // (!access.filter(a => a.module.includes('accounts'))[0].updateaccess && !access.filter(a => a.module.includes('accounts'))[0].deleteaccess) : false}
                    />
                  </td>
                ),'isactive':
                (item,index)=>(
                  <td>
                    <input
                    type="checkbox"
                      id={"checkbox-" + index}
                      name={"isactive-" + index}
                      checked = {item.isactive}
                      disabled = {true}
                    />
                  </td>
                ),'Actions':
                (item,index)=>(
                  <td>
                    {<CTooltip content="Edit User"><CButton
                    size="sm"
                    className="btn-brand mr-1 mb-1"
                    color="info"
                    // hidden={item.role === 'root' ? true : false}
                    onClick={() => history.push(`/users/edituser/${item.username}`)}
                    >
                    <CIcon name="cil-pencil" />
                    </CButton></CTooltip>
                    }
                    {
                    <CTooltip content="Delete User">
                    <CButton
                    size="sm"
                    className="btn-brand mr-1 mb-1"
                    color="danger"
                    // hidden={item.role === 'root' ? true : false}

                    ><CIcon name="cil-trash" />
                    </CButton>
                    </CTooltip>}
                  </td>
                )
              }}
              />

            </CCardBody>
            </CCard>

      </CCol>
      </CRow>

  )
}


export default Roles
