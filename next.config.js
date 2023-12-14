const NextJSObfuscatorPlugin = require("nextjs-obfuscator");

const nextConfig = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(
        new NextJSObfuscatorPlugin(
          {
            ...nextjsoptions,
          },
          {
            obfuscateFiles: {
              app: true,
              pages: true,
            },
            log: true,
          }
        )
      );
    }

    return config;
  },
};
