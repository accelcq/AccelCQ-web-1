import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  image, 
  bio, 
  linkedin, 
  twitter, 
  email 
}) => {
  return (
    <div className="card overflow-hidden group">
      <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary-600 mb-3">{position}</p>
        <p className="text-gray-600 mb-4 text-sm">{bio}</p>
        
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 transition-colors"
              aria-label={`${name}'s LinkedIn Profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 transition-colors"
              aria-label={`${name}'s Twitter Profile`}
            >
              <Twitter size={18} />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="text-gray-500 hover:text-primary-600 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;