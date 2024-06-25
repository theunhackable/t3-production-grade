import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId)
  return (
    <div className="flex h-full w-full min-w-0 justify-between border-t">
      <div className="flex items-center justify-center p-5">
        <img
          src={image.url}
          alt={image.name}
          className=" object-contain"
        />
      </div>
      <div className="flex w-48 flex-col border-l p-5 text-white flex-grow">
          <h4 className="py-4 text-xl font-bold">{image.name}</h4>
        <div className="flex flex-col gap-2 ">

          {uploaderInfo.fullName && <p>Uploaded by: {uploaderInfo.fullName}</p>}
          <p>Created on: {image.createdAt.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
