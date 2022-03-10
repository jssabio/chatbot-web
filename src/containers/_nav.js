import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Accounts Management']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Roles',
    to: '/roles',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Modules',
    to: '/modules',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Permissions',
    to: '/permissions',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Configurations']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Configurations',
    to: '/configurations',
    icon: 'cil-settings',
  },
]

