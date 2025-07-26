import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  image, 
  author, 
  category, 
  slug 
}) => {
  return (
    <article className="card group h-full flex flex-col">
      <Link to={`/blog/${slug}`} className="block overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium bg-primary-50 text-primary-600 px-2 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm ml-auto">
            <Calendar size={14} className="mr-1" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">
          <Link to={`/blog/${slug}`} className="hover:text-primary-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-8 h-8 rounded-full object-cover" 
          />
          <a 
            href="https://www.linkedin.com/in/priyaranjankumar1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium ml-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            {author.name}
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;