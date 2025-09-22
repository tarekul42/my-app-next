import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1>This is Gallery Page component</h1>
      {/* <img
        src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/next-js-image-component.png"
        alt="nextjs image"
        width={980}
        height={180}
      /> */}
      <h1>This is image from nextjs optimization</h1>
      <Image
        src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/next-js-image-component.png"
        alt="nextjs image"
        width={980}
        height={180}
      />
    </div>
  );
};

export default GalleryPage;
