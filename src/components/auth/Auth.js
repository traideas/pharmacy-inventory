import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Auth = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignIn(!showSignIn);
    setShowSignUp(!showSignUp);
  };
  const toggleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };
  return (
    <div>
      {showSignIn === true && showSignUp === false && (
        <LoginForm
          showSignIn={showSignIn}
          showSignUp={showSignUp}
          setShowSignIn={setShowSignIn}
          setShowSignUp={setShowSignUp}
          toggleSignUp={toggleSignUp}
        />
      )}
      {showSignIn === false && showSignUp === true && (
        <SignUpForm
          showSignIn={showSignIn}
          showSignUp={showSignUp}
          setShowSignIn={setShowSignIn}
          toggleSignIn={toggleSignIn}
        />
      )}
    </div>
  );
};

export default Auth;
