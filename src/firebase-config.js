import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_APIKEY}`,
    authDomain: `${process.env.REACT_APP_AUTHDOMEIN}`,
    projectId: `${process.env.REACT_APP_PROJECTID}`,
    storageBucket: `${process.env.REACT_APP_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_SENDERID}`,
    appId: `${process.env.REACT_APP_APPID}`
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)