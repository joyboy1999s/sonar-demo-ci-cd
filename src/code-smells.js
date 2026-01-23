// Sample file with CODE SMELLS

class UserManager {
    constructor() {
        this.users = [];
    }

    // CODE SMELL: Too many parameters
    // createUser(id, username, email, firstName, lastName, age, address, phone, role, department, salary) {
    //     return {
    //         id, username, email, firstName, lastName,
    //         age, address, phone, role, department, salary
    //     };
    // }

    // CODE SMELL: Function too long / Too complex
    processUserData(userData) {
        if (!userData) {
            return { valid: false, error: 'No data provided' };
        }

        if (!userData.username) {
            return { valid: false, error: 'Missing username' };
        }

        if (!userData.email) {
            return { valid: false, error: 'Missing email' };
        }

        if (userData.age <= 18) {
            return { valid: false, error: 'User too young' };
        }

        if (!userData.role) {
            return { valid: false, error: 'Missing role' };
        }

        if (!userData.department) {
            return { valid: false, error: 'Missing department' };
        }

        if (userData.salary <= 0) {
            return { valid: false, error: 'Invalid salary' };
        }

        return {
            valid: true,
            user: userData
        };
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
        for (const user of users) {
            if (user.role === 'admin' && user.active) {
                admins.push(user);
            }
        }
        return admins;
    }

    getActiveManagers() {
        const managers = [];
        for (const user of this.users) {
            if (user.role === 'manager' && user.active) {
                managers.push(user);
            }
        }
        return managers;
    }

    // CODE SMELL: Empty catch block
    parseUserData(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (e) {
            console.error('Error parsing JSON:', e);
            return null;
        }
    }

    // CODE SMELL: Cognitive complexity too high
    // calculateUserScore(user) {
    //     let score = 0;
    //     if (user.experience > 5) {
    //         score += 20;
    //         if (user.certifications > 0) {
    //             score += 10;
    //             if (user.projects > 10) {
    //                 score += 15;
    //                 if (user.rating > 4.5) {
    //                     score += 20;
    //                 } else if (user.rating > 4.0) {
    //                     score += 15;
    //                 } else if (user.rating > 3.5) {
    //                     score += 10;
    //                 } else {
    //                     score += 5;
    //                 }
    //             }
    //         }
    //     } else if (user.experience > 3) {
    //         score += 15;
    //         if (user.certifications > 0) {
    //             score += 8;
    //         }
    //     } else if (user.experience > 1) {
    //         score += 10;
    //     } else {
    //         score += 5;
    //     }
    //     return score;
    // }
}

module.exports = UserManager;
