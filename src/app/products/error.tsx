"use client";

import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-8">
      <h1 className="text-orange-700 text-5xl text-center">
        Something went wrong
      </h1>
      <h1 className="text-orange-700 text-2xl text-center">{error?.message}</h1>
      <div className="text-center">
        <button
          onClick={() => reset()}
          className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
