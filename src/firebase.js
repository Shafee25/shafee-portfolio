import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import storage

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDg78TQay_Ia64eVCG-yGu-GJLK1fLI7ok",
    authDomain: "shafee-portfolio-backend.firebaseapp.com",
    projectId: "shafee-portfolio-backend",
    storageBucket: "shafee-portfolio-backend.firebasestorage.app",
    messagingSenderId: "273591572841",
    appId: "1:273591572841:web:62330fec9e522f97d185f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize storage

export { db, auth, storage }; // Export storage

