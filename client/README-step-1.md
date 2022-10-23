# Step 1 : Creation app React 18

## 1. Creation with script create-react-app

See [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

We use the template **typescript**.

```bash
npx enab-x3-te-dev-api-mock-server-react --template typescript
cd enab-x3-te-dev-api-mock-server-react
npm start
```

See [README-react-18](./README-react-18.md)

## 2. Execution in dev mode

```bash
npm start
```

## 3. Execution in prod mode with Live server

Add in package.json "homepage"

- Before modification

```json
{
  "name": "enab-x3-te-dev-api-mock-server-react",
  "version": "0.1.0",
  "private": true,
```

- After modification

```json
{
  "name": "enab-x3-te-dev-api-mock-server-react",
  "version": "0.1.0",
  "private": true,
  "homepage": "./",

```

```bash
npm run build

```

With Live server in vscode, execute [./build/index.html](./build/index.html)
