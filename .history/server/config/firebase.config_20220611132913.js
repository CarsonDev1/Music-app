const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");
initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
