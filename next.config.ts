import type {NextConfig} from "next"

const nextConfig: NextConfig = {
    output: "export", // This might be needed for static export
    trailingSlash: true,
    images: {
        unoptimized: true, // Required for Cloudflare deployment
    },
}

export default nextConfig

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import {initOpenNextCloudflareForDev} from "@opennextjs/cloudflare"

initOpenNextCloudflareForDev()
