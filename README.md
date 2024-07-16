This is the official repository of **OnlyAlgos**.

If you are interested in contributing to the codebase, you're most welcome! Read the README file to know the steps to contribute a new algorithm with your name as the contributor.

## Steps to Contribute

First, fork the repository and clone it to your local environment.

Open the folder in your desired IDE and run the following command first.

```bash
npm install
```

The, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To contribute a new algorithm on OnlyAlgos,

1. create an entry in the **@data/algos.ts**
2. create the following folder **app/algos/<slug>/page.tsx** where slug is the slug in your entry of **@data/algos.ts**
3. In **app/algos/<slug>/page.tsx**, write your frontend code.
4. For backend algorithm logics, create file **<slug>.action.ts** as a sibling of frontend i.e. **app/algos/<slug>/page.tsx**.
5. Push your updated code on Github and Create a pull request.
