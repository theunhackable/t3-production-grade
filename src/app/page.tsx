import { db } from "~/server/db";


export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const images = await db.query.images.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className=" columns-4">
        {images.map((image) => (
          <div key={image.name} className="my-5 w-48 flex flex-col text-white">
            <img src={image.url} alt="" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
