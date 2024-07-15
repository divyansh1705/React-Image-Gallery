import React from 'react';
import { Link } from 'react-router-dom';


const ImageCard = ({ image }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={`/images/${image.id}`} key={image.url} ><img src={image.url} alt="" className="w-full"/></ Link>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            {image.title}
          </div>
          <p className="font-bold text-black mb-3">{image.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
