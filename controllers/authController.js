import jwt from 'jsonwebtoken';
import User from '../models/User';

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
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({token});
    } catch(e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
