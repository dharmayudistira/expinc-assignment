"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center border-t border-dashed border-gray-300">
      <div className="container border-x border-dashed border-gray-300 max-w-6xl flex justify-center items-center">
        <p>Powered by</p>
        <Image
          src="/assets/open-ai-logo.webp"
          alt="open ai logo"
          width={480}
          height={480}
          className="w-24 h-auto"
        />
      </div>
    </footer>
  );
}
