import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="https://path-integral.com">
          <Image
            src={require('./../../../assets/images/PIL05.png')}
            alt="Open"
            width={94}
            height={94} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;