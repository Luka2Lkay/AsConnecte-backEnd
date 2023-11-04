const Reseller = require("../models/reseller_model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const {secretKey} = require("../config/auth_key_config")

const signUp = async (req, res) => {
const {username, email, password, confirmPassword} = req.body

const hash = bcrypt.hashSync(password, 10);
const hash2 = bcrypt.hashSync(confirmPassword, 10);

const checkEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(email);

try {
  const reseller = new Reseller({
    username,
    email,
    password: hash,
    confirmPassword: hash2,
  });

if(password !== confirmPassword){
return res.status(401).json({message: "passwords don't match"})
}

  if (password === confirmPassword && checkEmail) {
    const registeredReseller = await reseller.save();
    res
      .status(201)
      .json({ message: "Registered successfully!", reseller: registeredReseller });
  }
} catch (error) {
  res.status(500).json({ message: error.message });
}

}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const reseller = await Reseller.findOne({ email });
    
        if (!reseller) {
          return res.status(401).json({ message: "User not found" });
        }
    
        const isPasswordMatch = await bcrypt.compare(password, reseller.password);
    
        if (!isPasswordMatch) {
          return res.status(401).json({ message: "incorrect password" });
        }
    
        const token = jwt.sign(
          { userId: reseller._id, username: reseller.username },
          secretKey.secret,
          {
            expiresIn: '1h',
          }
        );
    
        res.status(200).json({ token: token, expiresIn: 3600, username: reseller.username, email: email, userId: reseller._id});
      } catch (err) {
        res.status(401).json({ message: err.message });
      }
}

const getAllResellers = async (req, res) => {
    try {
        const resellers = await Reseller.find();
    
        res.status(200).json(resellers);
      } catch (error) {
        res.status(401).json({message: error.message})
      }
}

const updatePassword = async (req, res) => {
    try {
        await Reseller.findByIdAndUpdate(req.params.id, req.body);
    
        res.status(201).json("Changes made successfully");
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = {signUp, signin, getAllResellers, updatePassword}
