import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPL59OYlvGTRStz-1MGZJTJrzmS15pQBo",
  authDomain: "my-portfolio-8377b.firebaseapp.com",
  projectId: "my-portfolio-8377b",
  storageBucket: "my-portfolio-8377b.appspot.com",
  messagingSenderId: "251121358239",
  appId: "1:251121358239:web:32ec9633d9ebea499d99aa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
