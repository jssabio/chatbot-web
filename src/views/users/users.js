import React,{ useEffect,useState } from 'react';
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

const Users = () => {
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
    {id: 0, name: 'Administrator', email: 'administrator@gmail.com',registered: '2018/01/01', role: 'Guest', status: 'Pending', isroot: true},
    {id: 1, name: 'Samppa Nori', email: 'sn@gmail.com',registered: '2018/01/01', role: 'Member', status: 'Active', isroot: false},
    {id: 2, name: 'Estavan Lykos', email: 'el@gmail.com',registered: '2018/02/01', role: 'Staff', status: 'Banned', isroot: false},
    {id: 3, name: 'Chetan Mohamed', email: 'cm@gmail.com',registered: '2018/02/01', role: 'Admin', status: 'Inactive', isroot: false},
    {id: 4, name: 'Derick Maximinus',email: 'dm@gmail.com', registered: '2018/03/01', role: 'Member', status: 'Pending', isroot: false},
    {id: 5, name: 'Friderik Dávid',email: 'fd@gmail.com', registered: '2018/01/21', role: 'Staff', status: 'Active', isroot: false},
    {id: 6, name: 'Yiorgos Avraamu',email: 'ya@gmail.com', registered: '2018/01/01', role: 'Member', status: 'Active', isroot: false},
    {id: 7, name: 'Avram Tarasios', email: 'at@gmail.com',registered: '2018/02/01', role: 'Staff', status: 'Banned', isroot: false},
    {id: 8, name: 'Quintin Ed', email: 'jd@gmail.com',registered: '2018/02/01', role: 'Admin', status: 'Inactive', isroot: false},
    {id: 9, name: 'Enéas Kwadwo', email: 'jd@gmail.com',registered: '2018/03/01', role: 'Member', status: 'Pending', isroot: false},
    {id: 10, name: 'Agapetus Tadeáš',email: 'jd@gmail.com', registered: '2018/01/21', role: 'Staff', status: 'Active', isroot: false},
    {id: 11, name: 'Carwyn Fachtna',email: 'jd@gmail.com', registered: '2018/01/01', role: 'Member', status: 'Active', isroot: false},
    {id: 12, name: 'Nehemiah Tatius',email: 'jd@gmail.com', registered: '2018/02/01', role: 'Staff', status: 'Banned', isroot: false},
    {id: 13, name: 'Ebbe Gemariah',email: 'jd@gmail.com', registered: '2018/02/01', role: 'Admin', status: 'Inactive', isroot: false},
    {id: 14, name: 'Eustorgios Amulius',email: 'jd@gmail.com', registered: '2018/03/01', role: 'Member', status: 'Pending', isroot: false},
    {id: 15, name: 'Leopold Gáspár',email: 'jd@gmail.com', registered: '2018/01/21', role: 'Staff', status: 'Active', isroot: false},
    {id: 16, name: 'Pompeius René',email: 'jd@gmail.com', registered: '2018/01/01', role: 'Member', status: 'Active', isroot: false},
    {id: 17, name: 'Paĉjo Jadon', email: 'jd@gmail.com',registered: '2018/02/01', role: 'Staff', status: 'Banned', isroot: false},
    {id: 18, name: 'Micheal Mercurius',email: 'jd@gmail.com', registered: '2018/02/01', role: 'Admin', status: 'Inactive', isroot: false},
    {id: 19, name: 'Ganesha Dubhghall',email: 'jd@gmail.com', registered: '2018/03/01', role: 'Member', status: 'Pending', isroot: false},
    {id: 20, name: 'Hiroto Šimun',email: 'jd@gmail.com', registered: '2018/01/21', role: 'Staff', status: 'Active', isroot: false},
    {id: 21, name: 'Vishnu Serghei', email: 'jd@gmail.com',registered: '2018/01/01', role: 'Member', status: 'Active', isroot: false},
    {id: 22, name: 'Zbyněk Phoibos',email: 'jd@gmail.com', registered: '2018/02/01', role: 'Staff', status: 'Banned', isroot: false},
    {id: 23, name: 'Aulus Agmundr',email: 'jd@gmail.com', registered: '2018/01/01', role: 'Member', status: 'Pending', isroot: false},
    {id: 42, name: 'Ford Prefect',email: 'jd@gmail.com', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!'}
  ]

  return(

    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
               <CTooltip content="Add User">
                <CButton
                  size="sm"
                  className="btn-brand mr-1 mb-1"
                  color="primary"
                  onClick={() => history.push("/users/adduser")}>
                      <CIcon name="cil-plus" /> Add User
                </CButton>
              </CTooltip>
              <CTooltip content="Unlock Users">
                      <CButton size="sm" className="btn-brand mr-1 mb-1" color="secondary" disabled={checked.length === 0} >
                        <CIcon name="cil-lock-unlocked" /> Unlock Users
                      </CButton>
              </CTooltip>
              <CTooltip content="Reset Password">
                      <CButton size="sm" className="btn-brand mr-1 mb-1" color="secondary" disabled={checked.length === 0}>
                        <CIcon name="cil-ban" /> Reset Password
                      </CButton>
              </CTooltip>
                {/* <div className="card-header-actions"> */}

                  <CTooltip content="Delete Users">
                      <CButton size="sm" className="btn-brand mr-1 mb-1" color="danger" disabled={checked.length === 0}>
                        <CIcon name="cil-trash" /> Delete Users
                      </CButton>
                  </CTooltip>
                {/* </div> */}
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
              {key: 'name', label: 'Fullname' },
              {key: 'email', label: 'EmailAdress' },
              // {key: 'profilename', label: 'Profile' },
              // {key: 'isactive', label: 'Active?',sorter: false },
              {key: 'Actions', label:'',sorter: false }
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
                    hidden={item.isroot}
                    onClick={() => history.push(`/users/edituser/${item.id}`)}
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
                    hidden={item.isroot}

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


export default Users
