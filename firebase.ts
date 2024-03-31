import { getApp,getApps,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDDHQXaUJoQSMAzvgUqF9LU1SIAcxgDMOo",
    authDomain: "dropbox-clone-875ad.firebaseapp.com",
    projectId: "dropbox-clone-875ad",
    storageBucket: "dropbox-clone-875ad.appspot.com",
    messagingSenderId: "275573742641",
    appId: "1:275573742641:web:87b084fa7fe6333ef6c910"
  };


  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  const  db = getFirestore(app);
  const storage = getStorage(app);

  export{db,storage};