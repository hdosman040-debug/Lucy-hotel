import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

import { LanguageSwitcher } from './LanguageSwitcher';
import hotelConfig from '../config/hotelConfig';


const Navbar: React.FC = () => {

  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };

  }, []);



  const safeT = (
    key: string,
    fallback: string
  ) => {

    const value = t(key);

    return value === key ? fallback : value;

  };



  const scrollToSection = (id: string) => {

    requestAnimationFrame(() => {

      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: 'smooth'
        });

    });

  };



  const handleNavigation = (
    path: string,
    anchor?: string
  ) => {

    setIsOpen(false);

    if (anchor) {

      if (location.pathname !== "/") {

        navigate("/");

        setTimeout(() => {
          scrollToSection(anchor);
        }, 300);

      } else {

        scrollToSection(anchor);

      }

      return;
    }

    navigate(path);

  };



  const navItems = [

    {
      label: safeT("nav.home", "Home"),
      path: "/"
    },

    {
      label: safeT("nav.rooms", "Suites"),
      path: "/rooms"
    },

    {
      label: safeT("nav.dining", "Dining"),
      path: "/dining"
    },

    {
      label: safeT("nav.experiences", "Experiences"),
      path: "/",
      anchor: "experiences"
    },

    {
      label: safeT("nav.gallery", "Gallery"),
      path: "/",
      anchor: "gallery"
    },

    {
      label: safeT("nav.contact", "Contact"),
      path: "/",
      anchor: "contact"
    },

  ];



  return (

    <nav
      aria-label="Main Navigation"
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 border-b

        ${
          scrolled
          ?
          "bg-hotel-obsidian/95 backdrop-blur-md py-4 border-hotel-gold/15 shadow-2xl"
          :
          "bg-transparent py-6 border-white/[0.05]"
        }
      `}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">


          <Link
            to="/"
            className="focus:outline-none focus:ring-1 focus:ring-hotel-gold"
          >

            <span className="
              text-xl sm:text-2xl
              font-serif
              tracking-[0.25em]
              text-white
            ">

              {hotelConfig.brand.name}

            </span>


            <span className="
              block
              text-[8px]
              tracking-[0.4em]
              uppercase
              text-gray-400
              mt-1
            ">

              {hotelConfig.brand.tagline}

            </span>


          </Link>



          <div className="hidden md:flex items-center space-x-8">

            {navItems.map((item,index)=>(

              <button
                key={index}
                onClick={() =>
                  handleNavigation(
                    item.path,
                    item.anchor
                  )
                }
                className="
                  text-xs uppercase
                  tracking-luxury
                  text-gray-300
                  hover:text-white
                  transition
                  relative py-2
                  group
                "
              >

                {item.label}

                <span className="
                  absolute bottom-0 left-0
                  w-0 h-[1px]
                  bg-hotel-gold
                  transition-all
                  duration-300
                  group-hover:w-full
                "/>

              </button>

            ))}

          </div>



          <div className="hidden md:flex items-center gap-6">

            <LanguageSwitcher />


            <button
              onClick={() =>
                handleNavigation("/","booking")
              }
              className="
                flex items-center gap-2
                bg-hotel-gold
                text-hotel-obsidian
                px-5 py-3
                text-xs font-semibold
                uppercase
                tracking-luxury
                rounded-sm
                hover:bg-hotel-goldLight
                transition
              "
            >

              <Calendar className="w-4 h-4"/>

              {safeT(
                "nav.bookNow",
                "Book Your Stay"
              )}

            </button>


          </div>



          <div className="md:hidden flex items-center gap-4">

            <LanguageSwitcher />


            <button
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >

              {
                isOpen
                ?
                <X />
                :
                <Menu />
              }

            </button>


          </div>


        </div>

      </div>



      {/* Mobile Navigation Drawer */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full
          bg-hotel-obsidian
          border-b border-hotel-gold/20
          px-6 py-6
          transition-all duration-300
          ${isOpen
            ? "opacity-100 visible max-h-screen"
            : "opacity-0 invisible max-h-0 overflow-hidden"
          }
        `}
      >

        <div className="flex flex-col space-y-2">

          {navItems.map((item,index)=>(

            <button
              key={index}
              onClick={() =>
                handleNavigation(
                  item.path,
                  item.anchor
                )
              }
              className="
                text-left
                py-3
                text-sm
                uppercase
                tracking-widest
                text-gray-300
                hover:text-hotel-gold
                border-b border-white/5
              "
            >
              {item.label}
            </button>

          ))}


          <button
            onClick={() =>
              handleNavigation("/","booking")
            }
            className="
              mt-4
              bg-hotel-gold
              text-hotel-obsidian
              py-3
              uppercase
              text-xs
              font-semibold
              tracking-widest
            "
          >
            Book Your Stay
          </button>


        </div>

      </div>


    </nav>

  );

};


export default Navbar;
