import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  showLearnMore?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, showLearnMore = true }) => {
  return (
    <div className="card group h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="bg-primary-50 p-3 rounded-lg w-16 h-16 flex items-center justify-center text-primary-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>
        {showLearnMore && (
          <Link 
            to={link} 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-2"
          >
            Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;