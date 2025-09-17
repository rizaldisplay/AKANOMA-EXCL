import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
import type { NextConfig } from 'next'


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  eslint: {
        ignoreDuringBuilds: true,
    },
}

export default withNextIntl(nextConfig);
