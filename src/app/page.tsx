import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany();

  return (
    <div className=" columns-4">
      {images.map((image) => (
        <div key={image.name} className="my-5 flex w-48 flex-col text-white">
          <img src={image.url} alt="" />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignedIn>
        <Images />
      </SignedIn>
      <SignedOut>
        Bruhh You forgot to signin
      </SignedOut>
    </main>
  );
}
