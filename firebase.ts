// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCllgU57kbf9a_W8PgMC_vvKEKvxa6kdE',
  authDomain: 'netflix-clone-b0608.firebaseapp.com',
  projectId: 'netflix-clone-b0608',
  storageBucket: 'netflix-clone-b0608.appspot.com',
  messagingSenderId: '360039182060',
  appId: '1:360039182060:web:aff370e56e0ef3c1837fc9',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
