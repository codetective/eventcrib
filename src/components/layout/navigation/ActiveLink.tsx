import { usePathname } from 'next/navigation';

import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

const ActiveLink = ({
  children,
  className = '',
  href,
  activeClassName = 'active',
  ...props
}: LinkProps & {
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}) => {
  const asPath = usePathname();

  const classes =
    asPath === href || asPath === props.as
      ? `${className} ${activeClassName}`
      : className;

  return (
    <Link href={href} {...props} className={classes}>
      {children}
    </Link>
  );
};

export default ActiveLink;
