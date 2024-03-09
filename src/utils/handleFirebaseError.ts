import { FirebaseError } from 'firebase/app';

export const handleFirebaseError = (error: FirebaseError): string => {
  const errorMessages: { [key: string]: string } = {
    'auth/weak-password': 'Password is too weak',
    'auth/invalid-email': 'Invalid email',
    'auth/email-already-in-use': 'Email already in use',
    'auth/missing-password': 'Password is required',
    'auth/invalid-credential': 'Invalid credentials, please try again',
  };

  return errorMessages[error.code] || error.message;
};
