import Image from "next/image";
import FullPageImageView from "~/components/FullImagePage";
import { getImage } from "~/server/queries";

export default async function ImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  
  return <div>
    <FullPageImageView id={Number(imageId)} />
  </div>;
}
