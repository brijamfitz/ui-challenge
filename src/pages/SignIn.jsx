import React from 'react';
import SidePanel from '../components/SidePanel';
import Button from '../components/Button';
import TextField from '../components/TextField';
import ToastNotification from '../components/ToastNotification';
import Footer from '../components/Footer';

const SignIn = props => {
  return (
    <div>
      <ToastNotification />
      
      <SidePanel />

      <h1>Sign In</h1>

      <Button 
        title="Sign In"
      />

      <TextField />
      <TextField />

      <Footer />
    </div>
  )
}

export default SignIn;