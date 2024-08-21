import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import AxiosPublis from "../castsomgug/axios/AxiosPublis/AxiosPublis";

export const Athcontes = createContext('')
const AthoProvadar = ({ children }) => {
    const Googleprovider = new GoogleAuthProvider();
    const [Loding, setloding] = useState(true)
    const [user, setuser] = useState([])
    const axpublik = AxiosPublis()
    const singup = (email, password, name) => {

        return createUserWithEmailAndPassword(auth, email, password, name)

    }
    const singin = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        return signOut(auth)

    }
    const updateProfil = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    const Google = () => {
        return signInWithPopup(auth, Googleprovider)
    }

    useEffect(() => {
        const chens = onAuthStateChanged(auth, currentUser => {
          
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axpublik.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setuser(currentUser)
                        }
                    })
            }
            else {
                // TODY
                localStorage.removeItem('access-token')
            }

        })
        return () => {
            chens()
        }
    }, [])

    const athuinfo = {
        user,
        singup,
        singin,
        logout,
        updateProfil,
        Google
    }
    return (
        <Athcontes.Provider value={athuinfo}>
            {children}
        </Athcontes.Provider>
    );
};

export default AthoProvadar;