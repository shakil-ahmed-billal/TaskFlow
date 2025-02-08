import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config.";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPubLic = useAxiosPublic()

    // authentication provider setup
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    // google log in
    const signInPopup = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // create a new user
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user login in function
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user profile update 
    const userProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }
    // user Log out
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user auth info
    const authInfo = {
        user,
        loading,
        signInPopup,
        createNewUser,
        loginUser,
        userProfile,
        userLogOut,
        setLoading
    }
    // user information set state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser)

            // set user verify token 
            const jwtUser = { email: currentUser?.email }
            if (currentUser?.email) {
                const { data } = await axiosPubLic.post('/jwt', jwtUser, { withCredentials: true })
             
            } else {
                // clear user token 
                const { data } = await axiosPubLic('/logout', { withCredentials: true })
               
            }
            setLoading(false)
          
        })

        return () => {
            return unSubscribe()
        }
    }, [auth, axiosPubLic])
    return (
        <AuthContext.Provider value={authInfo}>
            {/* render all components */}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider