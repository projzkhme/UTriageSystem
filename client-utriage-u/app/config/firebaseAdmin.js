import admin from 'firebase-admin';

var serviceAccount = require('./serviceAccountKey.json'); // Your Firebase Admin SDK JSON file

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

export { db };
