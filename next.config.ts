import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/next-js-image-component.png"
      ),
      new URL(
        "https://atlas-content-cdn.pixelsquid.com/stock-images/logitech-wireless-mouse-optical-Od6kDW4-600.jpg"
      ),
      new URL(
        "https://www.pngall.com/wp-content/uploads/5/Bluetooth-Headset-PNG-File-Download-Free.png"
      ),
      new URL(
        "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-14-300x300.png"
      ),
      new URL(
        "https://img.favpng.com/10/7/19/apple-watch-series-2-apple-watch-series-3-smartwatch-png-favpng-2d9ngcUZA3fzY3LyMy5bEERT2_t.jpg"
      ),
      new URL("https://image.pngaaa.com/281/2718281-middle.png"),
      new URL(
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/254/2543013061728408832/previews/G03-200x200.jpg"
      ),
    ],
  },
};

export default nextConfig;
