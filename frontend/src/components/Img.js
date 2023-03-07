import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

export default function Img({ uploadedImg }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dffxhlnzz",
    },
  });

  const myImage = cld.image(uploadedImg);

  myImage.resize(
    thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
  );

  return (
    <>
      <AdvancedImage cldImg={myImage} />
    </>
  );
}
