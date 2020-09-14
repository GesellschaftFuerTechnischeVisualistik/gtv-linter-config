# JavaScript/TypeScript Coding Guidelines

* [Project Structure](01_ProjectStructure.md)
* [Source Files](02_SourceFile.md)
* [Naming Conventions](03_NamingConventions.md)
* [Comments & Documentation](04_CommentsDocumentation.md)
* [Best Practices](05_BestPractices.md)

# Using the GTV ESLint configurations

1. Generate a GitLab Personal Access Token with API privileges, copy that token to a save location.
2. Run `npm config set '//code.visualistik.de/api/v4/packages/npm/:_authToken' "<TOKEN>"`, replacing `<TOKEN>` with your token generated in step 1.
3. Run `echo @intern_qs:registry=https://code.visualistik.de/api/v4/packages/npm/ >> .npmrc` in the root directory of your javascript project (where package.json is), to associate the @intern_qs scope with the GTV GitLab package repository. The .npmrc file should be added to version control.
4. Run `npm i @intern_qs/eslint-config --savedev` to install the GTV ESLint configuration. Take note of the messages about missing peer dependencies.
5. Update or install any missing peer dependencies noted in the previous step, which may be any of: `npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jsdoc --savedev`. If you are unsure what peer dependencies are required, run `npm view @intern_qs/eslint-config peerDependencies`
6. Add a file named `.eslintrc.js` in the project root, setting up ESLint the use of the GTV ESLint configurations. Here's an example file for a project that uses TypeScript, ECMAScript 6 (2015) idioms and modules, as well as jQuery, and jsdoc for documentation:
    ```
    module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        'browser': true,
        'es6': true,
        'jquery': true
    },
    parserOptions: {
        'sourceType': 'module',
        'project': './tsconfig.json',
        'ecmaVersion': 6
    },
    extends: [
        '@intern_qs/eslint-config/eslint-config-ts',
        '@intern_qs/eslint-config/eslint-config-jsdoc'
    ]
    };
    ```
7. Run ESLint to see if everything works as intended: `./node_modules/.bin/eslint -c .eslintrc.js . --ext .ts` for typescript projects.
8. Configure your IDE to use ESLint to check automatically. In VS Code it should be enough to install the ESLint extension and everything should be picked up automatically.