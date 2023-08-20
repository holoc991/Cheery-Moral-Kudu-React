import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Cheery Moral Kudu</title>
        <meta property="og:title" content="Login - Cheery Moral Kudu" />
      </Helmet>
      <div className="login-container1">
        <h1 className="login-text">Login</h1>
      </div>
    </div>
  )
}

export default Login
