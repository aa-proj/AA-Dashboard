import admin from 'firebase-admin';
import fs from "fs/promises"

const serviceAccount = JSON.parse(await fs.readFile("admin.json"))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const userid = "test-kokoa0429-2"

// generate custom token
const token = await admin.auth().createCustomToken(userid)

console.log(token)
