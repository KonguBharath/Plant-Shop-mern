1. Build a NavBar with page routing in the frontend
   => install react-router-dom in the frontend folder
   => type this in the terminal /c/2024_projects/frontend
   => npm install react-router-dom
2. Now need to connect backend for the dynamic routing using web api
   => In the root terminal type mkdir backend
   => cd backend
   => npm init -y
   => then right click the backend folder => create new file
   => tsconfig.json to configure typescript in our backend
   3.config eslint npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   =>create .eslintrc.js in the backend folder
   _/copy this in the eslint folder_/
   module.exports = {
   env: {
   es2016: true,
   node: true,
   },
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
   ecmaVersion: 'es2016',
   sourceType: 'module',
   },
   plugins: ['@typescript-eslint'],
   }
   create express server npm install express npm install --save-sev @types/express

create src/index.ts copy data.ts and Product.ts from frontend to backend

import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
const app = express()
app.get('/api/products', (req: Request, res: Response) => {
res.json(sampleProducts)
})
const PORT = 4000
app.listen(PORT, () => {
console.log(`server started at http://localhost:${PORT}`)
})
4.npm run build => on the back end to convert ts files in to js files
