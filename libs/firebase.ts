// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';


// Your Firebase configuration object
const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
apiKey: "AIzaSyAR2z2Aaq-9MYSUeD_W7N6vXMtsu0RNGiY",
authDomain: "reservoir-app-ddccf.firebaseapp.com",
projectId: "reservoir-app-ddccf",
storageBucket: "reservoir-app-ddccf.appspot.com",
messagingSenderId: "165512950512",
appId: "1:165512950512:web:b512458e14ab1426504835",
measurementId: "G-7HPFGZ996W"
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}


const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { auth };
