import React from "react";
import { Instagram, Twitter, Youtube } from "lucide-react";

function Contact() {
  const email = "hello@jonnyorr.com";
  
  return (
    <div className="pt-20">
      <div className="flex flex-col items-center space-y-4">
        <a href={`mailto:${email}`} className="italic text-lg text-white hover:scale-105 duration-1000">
          {email}
        </a>
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-white hover:text-pink-600 hover:scale-105 duration-1000" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-white hover:text-blue-400 hover:scale-105 duration-1000" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-6 w-6 text-white hover:text-red-600 hover:scale-105 duration-1000" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;