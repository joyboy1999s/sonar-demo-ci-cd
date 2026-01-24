// Sample file with SECURITY VULNERABILITIES

const express = require('express');
const app = express();

class SecurityIssues {

    // VULNERABILITY: Regular Expression Denial of Service (ReDoS)
    // The regex is vulnerable to catastrophic backtracking
    validateInput(input) {
        const regex = /^([a-zA-Z0-9]+\s?)+$/;
        return regex.test(input);
    }

    // VULNERABILITY: X-Powered-By header exposure
    // Express enables this by default, but explicitly setting it or not disabling it is an issue
    configureServer() {
        // SonarQube recommends disabling this
        app.set('x-powered-by', true);
    }

    // VULNERABILITY: Generic Exception
    // Throwing generic errors makes debugging harder and can mask specific issues
    processData(data) {
        try {
            if (!data) {
                throw new Error("Something went wrong");
            }
        } catch (e) {
            // VULNERABILITY: Print Stack Trace
            console.log(e.stack);
            throw e;
        }
    }

    // VULNERABILITY: Hardcoded IP Address
    connectToServer() {
        const ip = "192.168.1.100";
        console.log(`Connecting to ${ip}`);
    }

    // VULNERABILITY: Use of deprecated function (example)
    legacyFunction() {
        return escape("Hello World"); // escape() is deprecated
    }
}

module.exports = SecurityIssues;
