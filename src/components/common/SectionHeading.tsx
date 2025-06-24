import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  titleClass?: string;
  subtitleClass?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  titleClass = '',
  subtitleClass = '',
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-bold mb-4 ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''} ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;