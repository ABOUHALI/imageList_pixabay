import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const ImageList = (props) => {
    console.log(props);
    const images = props.images.map((image)=>{
        return <img  className='cursor-pointer -z-10' src={image.webformatURL} alt="" role='presentation' />
    })
    const responsive = {
      0: { items: 1 },
      720: { items: 2 },
      1024: { items: 5 },
    };
  return (
    <AliceCarousel
        items={images}
        responsive={responsive}
        controlsStrategy="alternate"
    />
  )
}

export default ImageList