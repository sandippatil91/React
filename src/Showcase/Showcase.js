import React from 'react';
import './Showcase.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
 
  {
    src: "./images/11.jpg",
    width: 4,
    height: 3
  },
  {
    src: "./images/22.jpg",
    width: 4,
    height: 3
  },
  {
    src: "./images/33.jpg",
    width: 4,
    height: 3
  },
  {
    src: "./images/4.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3
  },
 
]; 
const Showcase = ()  => {
	 const [currentImage, setCurrentImage] = React.useState(0);
	  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

	  const openLightbox = React.useCallback((event, { photo, index }) => {
	    setCurrentImage(index);
	    setViewerIsOpen(true);
	  }, []);

	  const closeLightbox = () => {
	    setCurrentImage(0);
	    setViewerIsOpen(false);
	  };
	return(
			<section className="shwocase-section">
				<div className="container">
					<div className="row pt-5">
						<div className="col-12 col-md-12 pt-1">
							<h2>portfolio</h2>
							<h1>Showcase</h1>
							<div className="pb-5">
					      <Gallery photos={photos} onClick={openLightbox} />
					      <ModalGateway>
					        {viewerIsOpen ? (
					          <Modal onClose={closeLightbox}>
					            <Carousel
					              currentIndex={currentImage}
					              views={photos.map(x => ({
					                ...x,
					                srcset: x.srcSet,
					                caption: x.title
					              }))}
					            />
					          </Modal>
					        ) : null}
					      </ModalGateway>
					    	</div>
							</div>
						</div>
					</div>
			</section>
	);
}

export default Showcase;