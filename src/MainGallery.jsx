import React, { useState, useEffect } from 'react';
import ImageCard from "./assets/ImageCard";
import { Link } from 'react-router-dom';

const URL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20';

function MainGallery(){
    const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data.photos && data.photos.length > 0) {
          setImages(data.photos);
        } else {
          setError('No images found');
        }
      })
      .catch(err => setError(err.message))
      
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <>
    <h1 className='w-fit mx-auto font-semibold my-5 text-xl'> <Link to="/"> Main Gallery Page </Link></h1>
    <div className='flex flex-wrap gap-2 ml-36'>
   
    {images.map((image,index) => (
        
    <ImageCard key={index} image={image} />
      
    ))}
    </div>
     
    </>
  );
}

export default MainGallery;