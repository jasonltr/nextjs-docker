This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Build Docker Image

```
docker build -t nextjs-in-docker .
```

## Run Docker Image

We need to pass an environment variable to the docker run command using `-e NEXT_PUBLIC_[VARIABLE_NAME]` where `[VARAIBLE_NAME]` is the name of your variable. You can also use the `--env-file` flag to specify the `.env` file.

Passing environment variables via `-e`:

```
docker run -p 3000:3000 -e NEXT_PUBLIC_MESSAGE='from docker!' nextjs-in-docker
```

Passing environment variables via `--env-file`:

```
docker run -p 3000:3000 --env-file .env.development nextjs-in-docker
```

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

## Using entrypoint

First add entrypoint.sh  
Add in the variables to declare  
end with exec "$@"  
modify dockerfile to ensure entrypoint.sh is in the RUNNER environment  
add in entrypoint command before CMD to run the entrypoint script  

[guide](https://wangwei1237.github.io/Kubernetes-in-Action-Second-Edition/docs/Setting_the_command_arguments_and_environment_variables.html)  

using the guide above, copy dockerfile command to k8s manifest, 
k8s manifest command = dockerfile ENTRYPOINT   
k8s manifest args = dockerfile CMD  

