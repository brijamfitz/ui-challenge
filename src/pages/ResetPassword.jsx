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

      <Button 
        title="Reset Password"
      />

      <TextField />

      <Footer />
    </div>
  )
}

export default ResetPassword;