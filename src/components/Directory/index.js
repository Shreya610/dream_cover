import React from 'react';
import { Link } from 'react-router-dom';
import ShopWomen from './../../assets/00.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <Link to="/search">
            Shop
          </Link>
        </div>
   
      </div>
    </div>
  );
};

export default Directory;
