# NextJS Static Demo

It's a [Next.js](https://nextjs.org/) project (v14.1.0) bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to do it on your own

### 1. Create a NextJs project

Just type `npx create-next-app@latest` and answer a few questions.

> More info at [Create a NextJs project](https://nextjs.org/docs/getting-started/installation)

#### IMPORTANT

I had to rename `next.config.mjs`  to `next.config.js` and change the file this way:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
        output: 'export', // --> ADD
    };
// export default nextConfig; --> REMOVE
module.exports = nextConfig // --> ADD
```

I don't know why, but it seems JS modules are not supported by the Next.js GitHub Action (see next chapter)

### 2. Activate GitHub Pages (deploy through GitHub Actions)

Go To `Settings` page, select `Pages` on the menu on the left, go to section `Build and deployment` -> `Source`,
click `GitHub Actions` dropdown and select the action `Next.js by GitHub Actions`.
Click on `Configure` to open the `.github/workflows/nextjs.yml` file editor.

![github-action-source.png](assets%2Fgithub-action-source.png)

#### IMPORTANT

Since I used `NextJs 14.1.0`, I had to remove the following lines of code (row 78 and 79) from
the `.github/workflows/nextjs.yml`

```yaml
      - name: Static HTML export with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next export
```

![github-action-code.png](assets%2Fgithub-action-code.png)

**Remember to commit** the file!

### 3. Test it

Do some changes on your codebase and push it to `master` branch. Wait for the action to end its workflow and go
to `https://{your-github-name}.github.io/{your-project-name}` (in my
case https://danielzotti.github.io/nextjs-static-demo/) 
