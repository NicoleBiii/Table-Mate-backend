import jwt from 'jsonwebtoken';

export const verifyAuth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided. Access denied." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save user information in request for later use
    next(); // Proceed to the next middleware/handler
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};  