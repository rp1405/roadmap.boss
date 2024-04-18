const firebaseAdmin = require("firebase-admin");
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_DETAILS)
  ),
});

module.exports.isUserAuthenticated = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split(" ")[1];
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Add user information to request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error("Error verifying Firebase token:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
