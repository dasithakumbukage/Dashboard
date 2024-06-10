/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],

  images: {
    domains: [
      "meththa-sample.s3.us-west-1.amazonaws.com",
      "http://localhost:5000",
    ],
  },
};
