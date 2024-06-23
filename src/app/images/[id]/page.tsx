import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function ImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  let image
  try {

    image = await getImage(Number(imageId));
  } catch(e) {
    console.error('error happened while fetching the image', e)
    return null
  }
  return <div>
    <Image className='' src={image.url} alt={image.name} width={200} height={200} />
  </div>;
}
