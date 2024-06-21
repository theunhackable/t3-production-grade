"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-gray-900 px-5 py-3 text-white">
      <div>
        <h2 className="text-xl font-bold">Gallery</h2>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
