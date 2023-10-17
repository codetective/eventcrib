import React from 'react';

function WrapContent(props: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`lg:container mx-auto px-5 ${props.className}`}>
      {props.children}
    </div>
  );
}

export default WrapContent;
