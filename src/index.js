import 'assets/scss/material-dashboard-pro-react.scss?v=1.5.0'
import {createBrowserHistory} from 'history'
import AdminLayout from 'layouts/Admin.jsx'

import AuthLayout from 'layouts/Auth.jsx'
import RtlLayout from 'layouts/RTL.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import {Redirect, Route, Router, Switch} from 'react-router-dom'

const hist = createBrowserHistory()

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/rtl" component={RtlLayout} />
            <Route path="/auth" component={AuthLayout} />
            <Route path="/admin" component={AdminLayout} />
            <Redirect from="/" to="/admin/dashboard" />
        </Switch>
    </Router>,
    document.getElementById('root')
)
