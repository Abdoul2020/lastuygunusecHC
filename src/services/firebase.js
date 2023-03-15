import { app, storage } from "../config/fbConfig";
//import { initializeApp } from "firebase/app";

import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage"

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
//import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

console.log('!!!! firebase initializeApp is runned');
//const app = initializeApp(getFirebaseConfig());


export function registerWithEmailAndPassword(email, password, firstName, lastName, phoneNumber) {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(getAuth(app), email, password)
            .then(resp => {
                console.log({ Useriscreated: resp });
                updateUserProfile(firstName, lastName, phoneNumber)
                    .then(resp => {
                        console.log("update Info:", resp)

                        sendVerifyEmail()
                            .then(() => {
                                resolve("Success");
                            })
                            .catch(error => {

                                console.log("hata var:", error)

                                reject(error.code)
                            });
                    })
                    .catch(error => {
                        console.log("genel Updat:", error)
                        reject(error.code)
                    });

                return resolve(resp)
            })
            .catch(error => { reject(error.code) });
    });
}

export function loginWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(getAuth(app), email, password)
            .then(userCredential => {
                if (!userCredential.user.emailVerified) {
                    sendVerifyEmail()
                        .then(() => {
                            resolve(null, true);
                        })
                        .catch(error => {
                            console.log({ send_verify_email_error: error });
                            reject(error);
                        });
                } else {
                    console.log({ Userisloggedin: userCredential });
                    resolve(userCredential);
                }

                return resolve(userCredential)

            })
            .catch((error) => { reject(error) })
    });
}

export function logOut() {

    signOut(getAuth(app));

}




export function sendVerifyEmail() {
    return new Promise((resolve, reject) => {
        sendEmailVerification(getAuth(app).currentUser)
            .then(resp => { resolve(true) })
            .catch(error => { reject(error.code) });
    });
}



export function updateUserProfile(firstName, lastName, phoneNumber) {
    return new Promise((resolve, reject) => {
        updateProfile(getAuth(app).currentUser, { displayName: (firstName + ' ' + lastName), photoURL: phoneNumber })
            .then(resp => { resolve(true) })
            .catch(error => { reject(error.code) });
    });
}

// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const user = res.user;
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name,
//         authProvider: "local",
//         email,
//       });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
// };



//uload File From here
export function handleUpload(file) {

    if (!file) {
        alert("Lütrefen Belge Seçiniz!")
    }
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            //setPercent(percent);


            console.log(percent)

        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
            });
        }
    );

}


export function forgetPassword(email) {

    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(getAuth(app), email).then(() => {

            resolve(null, true);

        }).catch((error) => { reject(error) })
    });



}