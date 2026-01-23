// Sample file with BUGS and VULNERABILITIES

const crypto = require('crypto');

class AuthService {
    constructor() {
        this.users = [];
    }

    // BUG: Using == instead of ===
    findUser(username) {
        return this.users.find(u => u.username == username);
    }

    // VULNERABILITY: Weak hashing algorithm (MD5)
    hashPassword(password) {
        return crypto.createHash('md5').update(password).digest('hex');
    }

    // VULNERABILITY: Hardcoded credentials
    authenticateAdmin(username, password) {
        if (username === 'admin' && password === 'admin123') {
            return true;
        }
        return false;
    }

    // BUG: Potential null pointer exception
    getUserRole(userId) {
        const user = this.users.find(u => u.id === userId);
        return user.role; // No null check
    }

    // VULNERABILITY: SQL Injection vulnerability
    getUserByQuery(username) {
        const query = "SELECT * FROM users WHERE username = '" + username + "'";
        return query; // Simulated SQL injection
    }

    // BUG: Incorrect return value
    isUserActive(userId) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            return user.active;
        }
        // Missing return statement for else case
    }

    // VULNERABILITY: Using eval (code injection)
    evaluateUserPermission(permissionCode) {
        return eval(permissionCode);
    }

    // BUG: Array modification during iteration
    removeInactiveUsers() {
        for (let i = 0; i < this.users.length; i++) {
            if (!this.users[i].active) {
                this.users.splice(i, 1); // Modifying array while iterating
            }
        }
    }
}

module.exports = AuthService;
