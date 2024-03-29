import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY?.toString(),
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.toString(),
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID?.toString(),
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET?.toString(),
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID?.toString(),
  appId: import.meta.env.VITE_FIREBASE_APP_ID?.toString(),
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
