import React from "react";
import { Link } from "react-router-dom";
import contentData from '../workData.json';

const WorkItem = ({ id, src, alt, title, client, date }) => {
  return (
    <Link to={`/work/${id}`} className="block">
      <div className="aspect-square overflow-hidden relative group">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col items-center justify-center">
          <div className="text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-1">{client}</p>
            <p className="text-xs">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Work() {
  const { content } = contentData;

  const getFirstImage = (mediaArray) => {
    return mediaArray.find(item => item.type === "image") || null;
  };

  return (
    <div className="px-48 py-8 font-serif">
      <div className="grid grid-cols-3 gap-4">
        {content.map((item) => {
          const firstImage = getFirstImage(item.media);
          if (firstImage) {
            return (
              <WorkItem 
                key={item.id}
                id={item.id}
                src={firstImage.src} 
                alt={firstImage.alt} 
                title={item.title}
                client={item.client}
                date={item.date}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Work;