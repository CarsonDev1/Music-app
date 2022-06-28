import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk7YX9tWSVhBVPjah8ZCCKbZgL4C1xEFY",
  authDomain: "music-app-9e8e9.firebaseapp.com",
  projectId: "music-app-9e8e9",
  storageBucket: "music-app-9e8e9.appspot.com",
  messagingSenderId: "174229990795",
  appId: "1:174229990795:web:c77e11e53f4f014f0d538e",
  measurementId: "G-1RMRPNGYCR",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
