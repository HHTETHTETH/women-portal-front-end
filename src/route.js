import React from 'react';

const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));

const route = [
    { path: '/auth/admin/login', exact: true, name: 'Signin 1', component: Signin1 }
];

export default route;