import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const login = async (req, res) => {
    const { username, password } = req.body;

    try{
        const user = await User.findOne({ username }).select("+password");
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(400).json({message:"Invalid credentials"});
        }
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
          }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const userData = {
            id: user._id,
            username: user.username,
          };
          res.json({ token, user: userData });
    } catch(e) {
        console.log("Login error:",e);
        res.status(500).json({
            message: "Authentication failed",
            error: e.message
          });
    }
}
