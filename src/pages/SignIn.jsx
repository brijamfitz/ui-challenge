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

      <TextField
        type="email"
        placeholder="Email"
      />
      <TextField
        type="password"
        placeholder="Password"
      />

      <div>Forgot your password? Reset it here.</div>

      <Footer />
    </div>
  )
}

export default SignIn;