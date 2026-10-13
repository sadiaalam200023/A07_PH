
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("Failed to log out. Please try again.");
        return;
      }

      setIsProfileOpen(false);
      toast.success("Logged out successfully!");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("Something went wrong while logging out.");
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            🛒
          </span>

          <div>
            <h1 className="font-bold text-gray-900">বাজার দর</h1>
            <p className="text-xs text-gray-500">
              Your daily market prices
            </p>
          </div>
        </Link>

       
        <div className="flex items-center gap-3">
          {isPending ? null : session?.user ? (
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setIsProfileOpen((previous) => !previous)
                }
                aria-label="Open profile menu"
                aria-expanded={isProfileOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21a7 7 0 0 1 14 0" />
                </svg>
              </button>

              {isProfileOpen && (
                <>
                  
                  <button
                    type="button"
                    aria-label="Close profile menu"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setIsProfileOpen(false)}
                  />

                  <div className="absolute right-0 z-50 mt-2 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                    <div className="border-b border-gray-100 px-3 py-3">
                      <p className="font-semibold text-gray-900">
                        {session.user.name || "My Account"}
                      </p>
                      <p className="break-all text-sm text-gray-500">
                        {session.user.email}
                      </p>
                    </div>

                    <Link
                      href="/updateinfo"
                      onClick={() => setIsProfileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      Log Out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
