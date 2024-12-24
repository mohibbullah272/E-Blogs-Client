import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const registerWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateAuthData=(username,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:username,
        photoURL:photo
    })
  }
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      if(currentUser?.email){
        const user = {email:currentUser?.email}
        axios.post(`https://e-blogs-server.vercel.app/jwt`,user,{withCredentials:true})
        .then(res=> {
          setLoading(false)

        })
      }
      else{
        axios.post('https://e-blogs-server.vercel.app/logOut',{},{withCredentials:true})
        .then(res=>{
          // console.log(res.data)
          setLoading(false)
        })
      }
     
    });
    return ()=> unsubscribe()
  }, []);

  const authInfo = {
    user,
    logout,
    signInWithPopup,
    loginWithEmail,
    loading,
    registerWithGoogle,
    signUpWithEmail,
    updateAuthData
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
