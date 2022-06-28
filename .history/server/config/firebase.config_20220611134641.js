const { initializeApp, applicationDefault } = require("firebase-admin/app");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://music-app-9e8e9.firebaseio.com",
});

module.exports = admin;
