// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZFgoiwT7lVcv0Y4UHSJ13my4UT2TdX1I',
  authDomain: 'groovy-electron-351012.firebaseapp.com',
  projectId: 'groovy-electron-351012',
  storageBucket: 'groovy-electron-351012.appspot.com',
  messagingSenderId: '446741801418',
  appId: '1:446741801418:web:c8cd8d91047fe5792cc733'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
