import { List } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

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
