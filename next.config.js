/** @type {import('next').NextConfig} */

class VeliteWebpackPlugin {
  static started = false
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite')
      await build({ watch: dev, clean: !dev })
    })
  }
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com', // ✅ Add this line
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com" 
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname:"cdn.changelog.com",
      },

      {
        protocol: 'https',
        hostname: "secure.meetupstatic.com" 
      },
      {
        protocol: 'https',
        hostname: "og-image-react-egghead.vercel.app" 
      },
      {
        protocol:'https',
        hostname: "speakeasyjs.com"
      },
      {
        protocol: 'https',
        hostname: "vercel.com"
      },
      {
        protocol: 'https',
        hostname:"res.cloudinary.com"
      }
    ],
  },

  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
}

module.exports = nextConfig
