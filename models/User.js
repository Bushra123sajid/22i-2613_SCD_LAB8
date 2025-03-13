const bcrypt = require('bcryptjs');

let users = [];

class User {
  constructor(username, password) {
    this.id = Date.now().toString(); 
    this.username = username;
    this.password = bcrypt.hashSync(password, 10); 
  }

  static findByUsername(username) {
    return users.find((user) => user.username === username);
  }

  static findById(id) {
    return users.find((user) => user.id === id);
  }

  static addUser(user) {
    users.push(user);
  }
}

module.exports = User;