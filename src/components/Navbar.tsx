"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-gray-900 px-5 py-3 text-white">
      <div>
        <h2 className="text-xl font-bold">Gallery</h2>
      </div>
      <div className="flex flex-row items-center gap-5">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint='imageUploader' onClientUploadComplete={() => {router.refresh()}}/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
