# Publishing Packages to quo-pro Organization Repository on GitHub

## Introduction
This guide is intended for developers looking to publish packages to the quo-pro organization repository on GitHub. Follow these steps to ensure a smooth publication process.

## Prerequisites
- Ensure you have access to the [quo-pro GitHub Organization](https://github.com/orgs/quo-pro/packages).
- Familiarize yourself with the ReadMe file in each package for any specific instructions.

## Step-by-Step Guide

### 1. Make Your Changes
- Implement the necessary changes or additions in your package.
- If you create a new folder, ensure it is correctly exported.

### 2. Transpile with TypeScript
- Run `tsc` to transpile your code. This step should generate a `dist` folder.

### 3. Push the Distribution Files
- Currently, our CI does not auto-build, so it's crucial to push the `dist` folder along with your changes.

### 4. Version Bumping
- Before finalizing, increment the package version in the `package.json` file. This step is essential for version tracking and avoiding conflicts.

### 5. Final Push
- Push all changes, including the updated `dist` folder and `package.json`, to the repository.

## Post-Publishing
- After pushing your changes, our Continuous Integration (CI) system will handle the rest of the process.
- Monitor the CI for any build errors and address them promptly if they arise.
