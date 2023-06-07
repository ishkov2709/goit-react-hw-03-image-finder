import { Component } from 'react';
import fetchImages from 'services/fetchImages';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loading from './Loader';
import Modal from './Modal';

export class App extends Component {
  state = {
    page: 0,
    value: '',
    gallery: [],
    status: 'idle',
    showModal: false,
    url: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, value } = this.state;

    if (prevState.value !== value) {
      this.setState({ status: 'panding' });
      try {
        const {
          data: { hits },
        } = await fetchImages(page, value);

        this.setState({ gallery: hits, status: 'resolved' });

        if (!hits.length) {
          throw new Error();
        }
      } catch {
        this.setState({ status: 'rejected' });
      }
    }

    if (prevState.value === value && prevState.page < page) {
      this.setState({ status: 'panding' });
      try {
        const {
          data: { hits },
        } = await fetchImages(page, value);

        this.setState(prevState => {
          return {
            gallery: [...prevState.gallery, ...hits],
            status: 'resolved',
          };
        });
        if (!hits.length) {
          throw new Error();
        }
      } catch {
        this.setState({ status: 'rejected' });
      }
    }
  }

  handleIncrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  handleUpdateValue = value => {
    if (!value.trim()) {
      return this.setState({ status: 'rejected' });
    }
    this.setState({ value, page: 1 });
  };

  handleUpdateImg = (url = '') => {
    this.setState(({ showModal }) => {
      return { url, showModal: !showModal };
    });
  };

  render() {
    const { gallery, value, status, showModal, url } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleUpdateValue} />

        <ImageGallery
          gallery={gallery}
          value={value}
          onClick={this.handleUpdateImg}
        />

        {status === 'panding' && <Loading />}

        {status === 'resolved' && (
          <Button title="Load more" onClick={this.handleIncrementPage}></Button>
        )}

        {showModal && (
          <Modal url={url} value={value} reset={this.handleUpdateImg} />
        )}
      </div>
    );
  }
}
