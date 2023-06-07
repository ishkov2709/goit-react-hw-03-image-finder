import { Image, Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  largeImg: PropTypes.string,
};
