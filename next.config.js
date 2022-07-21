/** @type {import('next').NextConfig} */

/* 
  This header informs browsers it should only be accessed using HTTPS, instead of using HTTP. 
  Using the configuration below, all present and future subdomains will use HTTPS for a max-age of 2 years. 
  This blocks access to pages or subdomains that can only be served over HTTP.
*/
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
];

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  },
  reactStrictMode: true
};

module.exports = nextConfig;
