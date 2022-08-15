import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
// import {
//   getFirestore
// } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAqUvSOZOf2cxRrbAVmw7CddYxS6qXtssk",
  authDomain: "to-do-app-d3dc2.firebaseapp.com",
  projectId: "to-do-app-d3dc2",
  storageBucket: "to-do-app-d3dc2.appspot.com",
  messagingSenderId: "629026935383",
  appId: "1:629026935383:web:8d4eeaaddea8519f25c912"
};

const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

//  export{ app , auth}
const db =  getDatabase(app)
 export {db} 
export default firebaseConfig;
