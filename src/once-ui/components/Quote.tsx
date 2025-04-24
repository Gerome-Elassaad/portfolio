import React from 'react';

interface QuoteProps {
  children: React.ReactNode;
}

export const Quote: React.FC<QuoteProps> = ({ children }) => {
  return (
    <blockquote>
      {children}
    </blockquote>
  );
};
