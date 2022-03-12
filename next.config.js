/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pic.cakesdecor.com",
      "nationaltoday.com",
      "www.theflavorbender.com",
      "www.spicemountain.co.uk",
      "www.thespruceeats.com",
      "www.errenskitchen.com",
      "thecozyapron.com",
      "www.cubesnjuliennes.com",
    ],
    // formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
