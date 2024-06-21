// components/Icons.tsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp type
import { faBars, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSearch, faHeart);

interface IconProps {

  className?: string; // Optional className prop
}

export const MenuIcon = ({  className }: IconProps) => (
  <FontAwesomeIcon icon={faBars} className={className} />
);

export const SearchIcon = ({ className }: IconProps) => (
  <FontAwesomeIcon icon={faSearch} className={className} />
);

export const FavoriteIcon = ({  className }: IconProps) => (
  <FontAwesomeIcon icon={faHeart} className={className} />
);
