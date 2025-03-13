const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = (req, res) => {
  const { username, password } = req.body;
  const existingUser = User.findByUsername(username);
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  const user = new User(username, password);
  User.addUser(user);
  res.status(201).json({ message: 'User registered successfully' });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = User.findByUsername(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { register, login };