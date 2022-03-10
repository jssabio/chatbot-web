import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/users'));
const Roles = React.lazy(() => import('./views/roles/roles'));
const Modules = React.lazy(() => import('./views/modules/modules'));
const Permissions = React.lazy(() => import('./views/permissions/permissions'));
const Userform = React.lazy(() => import('./views/users/userform'));
const Configurations = React.lazy(() => import('./views/configurations/configurations'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/users', name: 'Users', component: Users, exact: true },
  { path: '/roles', name: 'Roles', component: Roles, exact: true },
  { path: '/modules', name: 'Modules', component: Modules, exact: true },
  { path: '/permissions', name: 'Permissions', component: Permissions, exact: true },
  { path: '/users/adduser', name: 'AddUser', component: Userform , exact: true},
  { path: '/users/edituser/:id', name: 'EditUser', component: Userform , exact: true},
  { path: '/configurations', name: 'Configurations', component: Configurations , exact: true},
];

export default routes;
