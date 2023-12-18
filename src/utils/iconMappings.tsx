import React from 'react';
import { MdLocalShipping, MdPerson, MdBusiness, MdSettings } from 'react-icons/md';

function getIconComponent (iconName:string, iconSize='24px',iconClassName="icon"):React.ReactNode {
  switch (iconName) {
    case 'MdLocalShipping':
      return <MdLocalShipping size={iconSize} className={iconClassName} />;
    case 'MdPerson':
      return <MdPerson  size={iconSize} className={iconClassName} />;
    case 'MdBusiness':
      return <MdBusiness  size={iconSize} className={iconClassName} />;
    case 'MdSettings':
      return <MdSettings  size={iconSize} className={iconClassName} />;
    default:
      return null;
  }
};
export default getIconComponent;
