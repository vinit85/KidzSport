// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth"; // Include RecaptchaVerifier

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB5YnxMXqbW5yzsNVmFII7lXdvmO5fd52k",
  authDomain: "my-project-57ad6.firebaseapp.com",
  projectId: "my-project-57ad6",
  storageBucket: "my-project-57ad6.firebasestorage.app",
  messagingSenderId: "162599735296",
  appId: "1:162599735296:web:e8822c540e725aa87608e5",
  measurementId: "G-4FC7W1Q9E0"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Authentication instance

// Export the auth instance for use in other parts of the app
export { auth, RecaptchaVerifier };

export { app};
