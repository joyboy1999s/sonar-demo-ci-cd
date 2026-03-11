# Node.js SonarQube Sample Project

This project contains intentional code quality issues for SonarQube testing purposes.

## Setup ...

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install SonarQube Scanner (if not already installed):**
   ```bash
   npm install -g sonarqube-scanner
   ```

3. **Configure SonarQube:**
   - Make sure SonarQube is running (default: http://localhost:9000)
   - Update `sonar.token` in `sonar-project.properties` with your authentication token
   - You can generate a token from SonarQube UI: My Account > Security > Generate Tokens

## Running SonarQube Analysis

Run the analysis with:
```bash
npm run sonar
```

Or directly with:
```bash
sonar-scanner
```

## Sample Issues Included

This project contains the following intentional issues for testing:

### 🐛 Bugs
- Using `==` instead of `===`
- Potential null pointer exceptions
- Incorrect return values
- Array modification during iteration

### 🔒 Vulnerabilities
- Weak hashing algorithm (MD5)
- Hardcoded credentials
- SQL injection vulnerabilities
- Use of `eval()` (code injection)

###  Code Smells
- Functions with too many parameters
- Deep nesting and high complexity
- Commented-out code
- Unused variables
- Magic numbers
- Empty catch blocks
- Duplicate code blocks

### 📋 Duplicates
- Duplicate validation logic across files
- Duplicate calculation methods
- Duplicate filtering logic

## File Structure

```
src/
├── buggy-auth.js         - Contains bugs and security vulnerabilities
├── code-smells.js        - Contains various code smells
├── duplicate-code-1.js   - Contains duplicate code patterns (Part 1)
└── duplicate-code-2.js   - Contains duplicate code patterns (Part 2)
```

## Expected SonarQube Results

After running the analysis, you should see:
- Multiple bug detections
- Security vulnerability warnings
- Code smell violations
- Code duplication reports

## Fixing the Issues

This is a sample project for testing purposes. To see how SonarQube helps improve code quality:
1. Run the initial scan
2. Review the issues in SonarQube dashboard
3. Fix the issues one by one
4. Re-run the scan to see improvements

## Notes

- This project is for **educational and testing purposes only**
- Do **NOT** use these code patterns in production
- The issues are intentional to demonstrate SonarQube's capabilities
