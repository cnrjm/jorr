import React from 'react';
import { useParams } from 'react-router-dom';
import contentData from '../workData.json';

const WorkDetail = () => {
  const { id } = useParams();
  const work = contentData.content.find(item => item.id === id);

  if (!work) {
    return <div>Work not found</div>;
  }

  const images = work.media.filter(item => item.type === 'image').slice(0, 4);
  const reel = work.media.find(item => item.type === 'video');

  return (
    <div className="px-48 pt-8 font-serif text-white">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="md:w-2/3 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {reel && (
          <div className="md:w-1/3 aspect-square md:aspect-auto">
            <video 
              src={reel.src} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      
      <div className="mt-8 pb-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
          <p className="font-sans text-xl">{work.description}</p>
        </div>
        <div className="md:w-1/3 font-sans grid grid-cols-2 gap-x-4 gap-y-6">
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">Client</p>
            <p>{work.client}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">Industry</p>
            <p>{work.industry}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">Shot on</p>
            <p>{work.shotOn}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">Date</p>
            <p>{work.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;