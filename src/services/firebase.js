import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'

const API_KEY = process.env.API_KEY;
const API_ID = process.env.API_ID;

const firebaseConfig = {
  apiKey: "AIzaSyD0VOHjarbUMCE11zJ4unGKCK0dH14Can0", 
  authDomain: "global-road-383820.firebaseapp.com",
  projectId: "global-road-383820",
  storageBucket: "global-road-383820.appspot.com",
  messagingSenderId: "743187005439",
  appId: "1:743187005439:web:c12133c039f1d43941f1ca",
  measurementId: "G-XVPER1GJ3H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Try to add analytics
const analytics =
  app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;

export { db, analytics };
