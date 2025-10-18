import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SelectedPage } from '@/Components/Shared/Types';
import useMediaQuery from '@/Hooks/useMediaQuery';
import Links from './Links';
import Button from '../UI/Button';

type Props = {
  flexBetween: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ flexBetween, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');
  const navigate = useNavigate();

  const handleLinkClick = (value: SelectedPage) => {
    setSelectedPage(value);
    setIsMenuToggled(false); // Close mobile menu after selecting
  };

  return (
    <nav>
      {/* DESKTOP NAV */}
      {isAboveMediumScreens && (
        <div className={`${flexBetween} lg:gap-28 gap-20`}>
          <div className={`${flexBetween} gap-16`}>
            <Links
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <Button onClick={() => navigate('/login')}>Log In</Button>
        </div>
      )}

      {/* MOBILE MENU ICON */}
      {!isAboveMediumScreens && (
        <button
          aria-label="Toggle menu"
          onClick={() => setIsMenuToggled((prev) => !prev)}
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      )}

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-80 w-[175px] md:w-[300px] rounded-es-3xl bg-secondary drop-shadow-2xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuToggled(false)}
            >
              <XMarkIcon className="h-10 w-10" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[20%] flex flex-col items-start gap-5 text-2xl">
            <Links
              selectedPage={selectedPage}
              setSelectedPage={handleLinkClick}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
