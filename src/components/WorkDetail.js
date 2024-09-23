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
    <div className="px-48 pt-8 font-serif">
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
      
      <div className="mt-8 pb-8">
        <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
        <p className="text-xl mb-6">{work.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="mb-2"><strong>Client:</strong> {work.client}</p>
            <p><strong>Industry:</strong> {work.industry}</p>
          </div>
          <div>
            <p className="mb-2"><strong>Shot on:</strong> {work.shotOn}</p>
            <p><strong>Date:</strong> {work.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;