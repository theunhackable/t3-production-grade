import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className=" columns-4">
      {images.map((image) => (
        <div key={image.name} className="my-5 flex w-48 flex-col text-white">
          <Image src={image.url} style={{objectFit: 'contain'}} width={192} height={192} alt={image.name} />
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
      <SignedOut>Bruhh You forgot to signin</SignedOut>
    </main>
  );
}
