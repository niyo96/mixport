import type {NextConfig} from "next"

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import {initOpenNextCloudflareForDev} from "@opennextjs/cloudflare"

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        unoptimized: true,
    },
}

export default nextConfig
initOpenNextCloudflareForDev()
