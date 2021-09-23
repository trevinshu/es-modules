# Basic Framework For Front End Vanilla.js Projects

## Preflight Check

1. Run npm install from the framework root folder. This will create the node_modules and install the dependancies found in the package.json file.

```bash
  npm install
```

1. Run development build using the parcel bundler.

```bash
   npx parcel src/index.html
```

or

```
  npm start
```

1. Run production build using the parcel bundler.

```bash
   npx parcel build src/index.html
```

or

```
  npm run build
```

## GIT SETUP

1. .gitignore ignores files and they will not be uploaded to remote repository.

2. Set up repo from VS Code
3. User Profile Icon
4. Sign in to sync settings
5. Sign in with github
6. Click the green button to accept
7. Click on the Source Control Tab
8. Publish To Git Select Public Reop
9. Publish the folder to the github repo

## Remove Repo

1. Go to the Github repo
2. Select settings
3. Scroll to the bottom
4. Delete the repo

## If you make an init mistake

```bash
  ls -lah
```

looking for a file that says

```
  rm -rf .git
```

re-int repository
