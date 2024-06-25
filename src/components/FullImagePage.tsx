import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 justify-between">
      <div className="flex-shrink flex justify-center items-center">
        <img
          src={image.url}
          alt={image.name}
          className=" object-fit flex-shrink"
        />
      </div>
      <div className="flex w-48 flex-col border-l">
        <div className="text-xl font-bold text-white">{image.name}</div>
      </div>
    </div>
  );
}
