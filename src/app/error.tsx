
"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-[#263740]">
        Something went wrong!
      </h2>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-xl bg-[#263740] px-6 py-3 text-white"
      >
        Try Again
      </button>
    </div>
  );
}
