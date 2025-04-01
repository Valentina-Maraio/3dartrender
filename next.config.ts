import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config, {isServer}) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });
    return config;
  }
};

export default nextConfig;
