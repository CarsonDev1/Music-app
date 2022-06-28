const admin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const serviceAccount = require("./serviceAccountKey.json");
initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://music-app-9e8e9.firebaseio.com",
});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
