import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBp70R8r_3rhxt4tE53IgJNpf0JJW8Y67M",
  authDomain: "disney-app-31517.firebaseapp.com",
  projectId: "disney-app-31517",
  storageBucket: "disney-app-31517.appspot.com",
  messagingSenderId: "499300224058",
  appId: "1:499300224058:web:b427771efa9925b1beb903",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
