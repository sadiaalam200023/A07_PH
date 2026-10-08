"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8faf8] px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        
        
        
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            ইমেইল
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            পাসওয়ার্ড
          </label>

          <input
            id="password"
            type="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        
        <button
          type="button"
          className="w-full rounded-lg bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          সাইন ইন
        </button>

        
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs text-gray-400">
            অথবা
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        
        <button
          type="button"
          className="mb-3 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
          </svg>

          GitHub দিয়ে সাইন ইন
        </button>

        
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.92-4.18 2.92-7.2Z"
            />
            <path
              fill="#34A853"
              d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.44c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.74 9.74 0 0 0 12 21.5Z"
            />
            <path
              fill="#FBBC05"
              d="M6.54 13.61a5.85 5.85 0 0 1 0-3.22V7.87H3.3a9.5 9.5 0 0 0 0 8.26l3.24-2.52Z"
            />
            <path
              fill="#EA4335"
              d="M12 6.36c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.48 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.7 5.37l3.24 2.52C7.31 8.08 9.46 6.36 12 6.36Z"
            />
          </svg>

          Google দিয়ে সাইন ইন
        </button>

       
        <p className="mt-6 text-center text-sm text-gray-500">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-semibold text-green-600 hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
}