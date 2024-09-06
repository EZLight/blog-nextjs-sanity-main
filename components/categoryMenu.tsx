import React from 'react';
import Link from 'next/link';
import NavLink2 from '../data/category-links';

const CategoryMenu: React.FC = () => {
  return (
    <nav className="w3-sidebar w3-bar-block w3-light-grey category-menu" style={{right:"0"}}>
        <button className="w3-dropdown-hover w3-amber w3-button w3-padding w3-hover-light-grey">Categories</button>
        {NavLink2.map((item) => (
            <Link className='w3-hover-light-grey' key={item.id} href={item.href}>
              <p >
                {item.link}
              </p>
            </Link>
        ))}
    </nav>
  );
};

export default CategoryMenu;
