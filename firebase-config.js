// =============================================================================
// CENTRAL FIREBASE CONFIGURATION (firebase-config.js)
// Edit this file only when connecting to a new or different Firebase project.
// =============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyBmC58p3JR5wcAPWXitO2jaP4qdxu8Coz8",
  authDomain: "yourzoom-1e0e6.firebaseapp.com",
  databaseURL: "https://yourzoom-1e0e6-default-rtdb.firebaseio.com",
  projectId: "yourzoom-1e0e6",
  storageBucket: "yourzoom-1e0e6.firebasestorage.app",
  messagingSenderId: "664744643855",
  appId: "1:664744643855:web:d500c8b574e8a7b53e427a"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Global service references
const auth = firebase.auth();
const database = firebase.database();

// Helper: Convert Mobile Number to internal auth email (avoids SMS OTP requirements)
function phoneToEmail(phone) {
  const cleaned = phone.replace(/[^0-9]/g, '');
  return `user_${cleaned}@nexuspay.local`;
}

// Master Admin configuration (Add your admin UIDs or phone emails here)
const ADMIN_CONFIG = {
  // You can set specific admin UID(s) or use role: 'admin' inside RTDB users node
  masterSecretKey: "admin123456" // Fallback secret access key for Admin Panel
};
