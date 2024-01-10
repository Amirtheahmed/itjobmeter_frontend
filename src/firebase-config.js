/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
//! Add security rules to your database before exposing config publicly
//! Reference: https://stackoverflow.com/a/37484053/17627866
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyC_p7NedLeSM_GkyTO8TpByytGX4iBYNC0",
  authDomain: "itjobmeter-frontend.firebaseapp.com",
  projectId: "itjobmeter-frontend",
  storageBucket: "itjobmeter-frontend.appspot.com",
  messagingSenderId: "109642899594",
  appId: "1:109642899594:web:406a2f469c165f89d00d73",
  measurementId: "G-NHS79NSC22"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
