// ✅ Ensure Firebase SDK is loaded before running this script
document.addEventListener("DOMContentLoaded", function () {
    if (typeof firebase === "undefined") {
        console.error("❌ Firebase SDK not loaded. Check if Firebase scripts are included in HTML.");
        return;
    }

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-CnSTFLZssjjGx5cyiQx6Pf0CRqgIXdk",
    authDomain: "docshare-f1a39.firebaseapp.com",
    projectId: "docshare-f1a39",
    storageBucket: "docshare-f1a39.firebasestorage.app",
    messagingSenderId: "727196135573",
    appId: "1:727196135573:web:465888329f6ed267d86b9c"
  };
// ✅ Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    window.auth = firebase.auth();
});
