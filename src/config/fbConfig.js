// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAclLtI5T-ssvzr0l4COIjNHbg_e93N7VY",
    authDomain: "enuygunusec.firebaseapp.com",
    projectId: "enuygunusec",
    storageBucket: "enuygunusec.appspot.com",
    messagingSenderId: "1015579853520",
    appId: "1:1015579853520:web:9ce174b98e1ee65def94d5",
    measurementId: "G-8QL0RFZY4H"
};



const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })
// export default firebase;