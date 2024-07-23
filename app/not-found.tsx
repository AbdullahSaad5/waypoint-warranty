// pages/404.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/404-image.gif" alt="Not Found" width={500} height={500} />
      <h1 className="text-4xl font-bold text-primary mt-8">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-primary rounded-lg  hover:bg-blue-700 transition duration-200 shadow-md border border-primary/25"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;
