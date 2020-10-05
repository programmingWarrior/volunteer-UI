import React, { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      const GoogleProvider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => { firebase
    .auth()
    .signInWithPopup(GoogleProvider)
    .then (result => {
        console.log(result);
      var { displayName, email } = result.user;
      const signedInUser = { name: displayName, email };
      setLoggedInUser(signedInUser);
      
    
    })
    .catch(error => {
       console.log(error);
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
        console.log(errorMessage);
    });

  };

 

    const handleSignOut =() => {
        firebase.auth().signOut().then(function() {
            console.log("sign out successfully");
          }).catch(function(error) {
            console.log(error);
          });
    }

  return (
    <div>
       
       <button
            style={{ width: "100%", backgroundColor: "tomato", color: "white" }}
            className="btn btn-outline-warning "
            onClick={handleSignIn}
          >Continue with Google</button>

      <button onClick={handleSignOut}>
          Sign Out
      </button>

    </div>

  )
 
};

export default Login;
