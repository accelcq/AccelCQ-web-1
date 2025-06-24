import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}) => {
  return (
    <div 
      className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${backgroundImage})`
      }}
    >
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;