import { List } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, value, onClick }) => {
  return (
    <List>
      {gallery.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          name={value}
          largeImg={largeImageURL}
          onClick={onClick}
        />
      ))}
    </List>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  onClick: PropTypes.func,
};
