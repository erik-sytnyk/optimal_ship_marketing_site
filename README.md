This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Heroku

General instructions here:

[https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)

- Install `Heroku CLI`
- create heroku remote

```

heroku git:remote -a {heroku_app_name} --remote {env}
```

For `heroku_app_name` use heroku instance name for particular environment (`qa`/`production`)

Push to heroku remote for new deployment

```
git push {env} develop:main
```

For example for `qa` environment use following commands:

```
heroku git:remote -a optimalship-marketing-qa --remote qa
git push qa develop:main
```

To reset git history for particular environment use following command

```
heroku plugins:install heroku-repo
heroku repo:reset --app {heroku_app_name}
```
