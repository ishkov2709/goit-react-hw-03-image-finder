import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, name, onClick, largeImg }) => {
  return (
    <Item
      onClick={() => {
        onClick(largeImg);
      }}
    >
      <Image src={url} alt={name} />
    </Item>
  );
};

export default ImageGalleryItem;
