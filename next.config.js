/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // remove private variables from processEnv
    // NEXT_PUBLIC_MESSAGE: process.env.NEXT_PUBLIC_MESSAGE,
    processEnv: Object.fromEntries(
      Object.entries(process.env).filter(([key]) =>
        key.includes('NEXT_PUBLIC_')
      )
    ),
  },
}

module.exports = nextConfig
