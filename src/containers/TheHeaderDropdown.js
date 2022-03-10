import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import {getInitials} from './../reusable/Initials'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  const user = localStorage.getItem('user_access')
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login")
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
       <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <div className="custom-initials-holder">
            <CImg
              src={'avatars/circle.jpg'}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
            />
            <span className="custom-initials">{user && (getInitials(user))}</span>
            </div>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={() => handleLogout()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
