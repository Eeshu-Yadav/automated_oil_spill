import React, { useState } from 'react';
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import ShipMap from '../Components/RealtimeMap/ShipMap';
import { ships } from '../Data/shipdata';

const SatelliteImage = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,image11,image12];
  
  const [currentImage, setCurrentImage] = useState(images[0]);

  const generateImage = (e) => {
    e.preventDefault()
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className='flex text-text01 gap-5 flex-1 flex-col'>
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500">Satellite Image</h1>
        
      <div className='flex w-10/12 gap-20 items-start justify-between'>
        <img className='aspect-square w-[35rem] h-80 object-cover size-[28rem]' src={currentImage} alt="Satellite" />

        <div className='flex flex-1 flex-wrap flex-col gap-5'>
        <form  className='flex flex-1 flex-wrap flex-col gap-5' onSubmit={generateImage}>
          <input
            className='bg-secondary border border-gray-300 px-3 py-1 rounded-md'
            type='text'
            placeholder='Enter MMSI no.'
            required={true}
          />
          <input
            className='bg-secondary border border-gray-300 px-3 py-1 rounded-md'
            type='text'
            placeholder='Enter the name of vessel'
            required={true}
          />
          <select
            id="timeFilter"
            value=""
            className="p-2 border border-gray-300 rounded bg-secondary text-text02 ml-2"
          >
            <option value="">Select for Anomaly</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Extreme">Extreme</option>
          </select>
          <button
            
            className='mt-3 bg-sky-500 hover:bg-sky-600 text-richblack-900 font-medium px-4 py-2 rounded-lg transition'
          >
            Generate Automatic Image
          </button>
          </form>
        </div>
      </div>
      <p className='text-4xl border border-yellow-500 inline rounded-lg p-2 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-500 '>Image Thumbnails</p>
      <div className='flex w-11/12 justify-between'>
      <div className='flex flex-col gap-5'>
        <div className='grid grid-cols-4 gap-3 p-5 border-2 rounded-xl border-text02'>
          {images.map((image, index) => (
            <img
              key={index}
              className='size-20 aspect-square object-cover rounded-lg cursor-pointer'
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
        <div className='flex items-start ju'>
          <p className='text-xl' >Filter</p>
          <select
            id="timeFilter"
            value=""
            className="p-2 border border-gray-300 rounded bg-secondary text-text02 ml-2"
          >
            <option value="">Select for Anomaly</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Extreme">Extreme</option>
          </select> 
          <select
            id="timeFilter"
            value=""
            className="p-2 border border-gray-300 rounded bg-secondary text-text02 ml-2"
          >
            <option value="">Select Region</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
            <option value="Antarctica">Antarctica</option>
          </select> 
        </div>
        </div>
        <ShipMap ships={ships} lat={20.0} lng={-288.0} max={8} min={6} zoom={false} height={"45vh"} width={"40%"}/>
      </div>
<div className='flex flex-col'
>
  <div className='flex justify-between w-10/12 mx-auto gap-4 border border-yellow-500 p-4 rounded-lg shadow-md mb-4'>
  <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
    Download
  </button>
  <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition'>
    Save to Project
  </button>
  <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition'>
    Export
  </button>
</div>

<div className='flex justify-between w-10/12 mx-auto gap-4 border border-yellow-500 p-4 rounded-lg shadow-md '>
  <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
    Coordinate: [X, Y]
  </button>
  <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition'>
    Zoom Level: 5x
  </button>
  <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition'>
    Overlay: AIS
  </button>
</div>
<div className='h-10 text-primary ' >.</div>
</div> 


    </div>
  );
};

export default SatelliteImage;
