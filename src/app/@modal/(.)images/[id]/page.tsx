import React from "react";
import { Modal } from "../../modal";
import FullPageImageView from "~/components/FullImagePage";

export default async function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {

  return (
    <div className="text-2xl font-bold text-white ">
      <Modal>
      <FullPageImageView id={Number(imageId)} />
      </Modal>
    </div>
  );
}
