import Image from "next/image";
import React from "react";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
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
  return( <div className="text-2xl font-bold text-white ">
    
    <Image className='' src={image.url} alt={image.name} width={200} height={200} />
    </div>);
}
