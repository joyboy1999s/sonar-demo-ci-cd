// Sample file with CODE SMELLS

class UserManager {
    constructor() {
        this.users = [];
    }

    // CODE SMELL: Too many parameters
    createUser(id, username, email, firstName, lastName, age, address, phone, role, department, salary) {
        return {
            id, username, email, firstName, lastName,
            age, address, phone, role, department, salary
        };
    }

    // CODE SMELL: Function too long / Too complex
    processUserData(userData) {
        let result = null;
        if (userData) {
            if (userData.username) {
                if (userData.email) {
                    if (userData.age > 18) {
                        if (userData.role) {
                            if (userData.department) {
                                if (userData.salary > 0) {
                                    result = {
                                        valid: true,
                                        user: userData
                                    };
                                } else {
                                    result = { valid: false, error: 'Invalid salary' };
                                }
                            } else {
                                result = { valid: false, error: 'Missing department' };
                            }
                        } else {
                            result = { valid: false, error: 'Missing role' };
                        }
                    } else {
                        result = { valid: false, error: 'User too young' };
                    }
                } else {
                    result = { valid: false, error: 'Missing email' };
                }
            } else {
                result = { valid: false, error: 'Missing username' };
            }
        } else {
            result = { valid: false, error: 'No data provided' };
        }
        return result;
    }

    // CODE SMELL: Commented out code
    // deleteUser(userId) {
    //     const index = this.users.findIndex(u => u.id === userId);
    //     if (index !== -1) {
    //         this.users.splice(index, 1);
    //     }
    // }

    // CODE SMELL: Unused variable
    updateUserEmail(userId, newEmail) {
        const timestamp = new Date(); // Unused variable
        const user = this.users.find(u => u.id === userId);
        if (user) {
            user.email = newEmail;
        }
    }

    // CODE SMELL: Magic numbers
    getUsersByAge() {
        return this.users.filter(u => u.age > 18 && u.age < 65);
    }

    // CODE SMELL: Duplicate code blocks
    getActiveAdmins() {
        const admins = [];
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].role === 'admin' && this.users[i].active) {
                admins.push(this.users[i]);
            }
        }
        return admins;
    }

    getActiveManagers() {
        const managers = [];
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].role === 'manager' && this.users[i].active) {
                managers.push(this.users[i]);
            }
        }
        return managers;
    }

    // CODE SMELL: Empty catch block
    parseUserData(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (e) {
            // Empty catch block
        }
    }

    // CODE SMELL: Cognitive complexity too high
    calculateUserScore(user) {
        let score = 0;
        if (user.experience > 5) {
            score += 20;
            if (user.certifications > 0) {
                score += 10;
                if (user.projects > 10) {
                    score += 15;
                    if (user.rating > 4.5) {
                        score += 20;
                    } else if (user.rating > 4.0) {
                        score += 15;
                    } else if (user.rating > 3.5) {
                        score += 10;
                    } else {
                        score += 5;
                    }
                }
            }
        } else if (user.experience > 3) {
            score += 15;
            if (user.certifications > 0) {
                score += 8;
            }
        } else if (user.experience > 1) {
            score += 10;
        } else {
            score += 5;
        }
        return score;
    }
}

module.exports = UserManager;
