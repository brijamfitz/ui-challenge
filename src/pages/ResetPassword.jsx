import React from 'react';
import SidePanel from '../components/SidePanel';
import Button from '../components/Button';
import TextField from '../components/TextField';
import Footer from '../components/Footer';

const ResetPassword = props => {
  return (
    <div>
      <SidePanel />

      <h1>Reset Password</h1>

      <div>Enter your registered email in order to receive password reset instructions.</div>

      <Button 
        title="Reset Password"
      />

      <TextField
        type="email"
        placeholder="Email"
      />

      <div>Didn’t mean to click that? Sign In.</div>

      <Footer />
    </div>
  )
}

export default ResetPassword;