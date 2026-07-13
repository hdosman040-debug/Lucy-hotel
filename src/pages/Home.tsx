import React from 'react';
import hotelConfig from '../config/hotelConfig';

import ServicesShowcase from '../components/ServicesShowcase';
import CulturalGallery from '../components/CulturalGallery';
import BookingForm from '../components/BookingForm';
import { HotelGallery } from '../features/home/HotelGallery';

import {
  Compass,
  Sparkles,
  MapPin,
  ArrowDown
} from 'lucide-react';



export default function Home() {


  const scrollToAbout = () => {

    document
      .getElementById('about')
      ?.scrollIntoView({
        behavior:'smooth'
      });

  };



  return (

    <div className="animate-luxury-fade bg-hotel-obsidian text-gray-300">


      {/* HERO SECTION */}

      <header
        id="home"
        className="
          relative h-[90vh]
          flex items-center justify-center
          overflow-hidden
        "
      >


        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/80
            via-hotel-obsidian/60
            to-hotel-obsidian
            z-10
          "
        />


        <div

          className="
            absolute inset-0
            bg-cover bg-center
            scale-105
          "

          style={{
            backgroundImage:
              "url('/hotel-building.jpg')"
          }}

          role="img"

          aria-label="
            Exterior view of Lucy Hotel in Dessie Ethiopia
          "

        />



        <div
          className="
            relative z-20
            text-center
            px-4
            max-w-5xl mx-auto
            space-y-8
          "
        >


          <div
            className="
              inline-flex items-center gap-2
              px-3 py-1
              border border-hotel-gold/30
              rounded-full
              bg-hotel-obsidian/80
              backdrop-blur-sm
            "
          >

            <MapPin
              className="w-3 h-3 text-hotel-gold"
            />


            <span
              className="
                text-hotel-gold
                tracking-[0.25em]
                text-[10px]
                uppercase
              "
            >
              Dessie · Wollo · Ethiopia
            </span>


          </div>




          <h1
            className="
              text-4xl sm:text-7xl
              font-serif
              tracking-[0.12em]
              text-white
              uppercase
            "
          >

            LUCY

            <span className="
              text-hotel-gold
              font-light
              block sm:inline
            ">
              HOTEL
            </span>


            <span
              className="
                block
                text-xs sm:text-sm
                font-sans
                text-hotel-goldLight
                tracking-[0.4em]
                mt-4
              "
            >

              {hotelConfig.brand.tagline}

            </span>


          </h1>




          <p
            className="
              text-gray-400
              max-w-2xl mx-auto
              text-sm sm:text-base
              leading-relaxed
            "
          >

            {hotelConfig.brand.description}

          </p>




          <div
            className="
              pt-6
              flex flex-col sm:flex-row
              justify-center
              gap-4
            "
          >


            <a

              href="#booking"

              className="
                bg-hotel-gold
                text-hotel-obsidian
                px-8 py-4
                text-xs
                font-semibold
                uppercase
                tracking-luxury
                rounded-sm
                hover:bg-hotel-goldLight
                transition
              "

            >

              Request Reservation

            </a>



            <button

              onClick={scrollToAbout}

              className="
                border border-white/20
                hover:border-hotel-gold
                text-white
                px-8 py-4
                text-xs
                uppercase
                tracking-luxury
                transition
              "

            >

              Explore Our Story

            </button>


          </div>


        </div>




        <div
          className="
            absolute bottom-8
            left-1/2
            -translate-x-1/2
            hidden sm:flex
            flex-col items-center
            text-white/40
          "
        >

          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll Down
          </span>


          <ArrowDown
            className="
              w-4 h-4
              animate-bounce
              text-hotel-gold
            "
          />


        </div>


      </header>





      {/* ABOUT SECTION */}

      <section
        id="about"
        className="
          py-24
          bg-hotel-charcoal
          border-t border-white/[0.03]
          px-4
        "
      >


        <div
          className="
            max-w-6xl mx-auto
            grid grid-cols-1 lg:grid-cols-12
            gap-12 items-center
          "
        >


          <div className="lg:col-span-5 space-y-6">


            <div className="flex items-center gap-2 text-hotel-gold">

              <span className="h-[1px] w-8 bg-hotel-gold"/>

              <span className="text-[10px] tracking-[0.35em] uppercase">
                About Lucy Hotel
              </span>

            </div>



            <h2
              className="
                text-3xl sm:text-4xl
                font-serif
                text-white
              "
            >

              Comfort And Heritage In Historic Wollo

            </h2>




            <p className="text-gray-400 text-sm leading-relaxed">

              Lucy Hotel welcomes guests with comfortable rooms,
              thoughtful services, and a connection to the culture
              and beauty of Dessie.

            </p>


            <p className="text-gray-400 text-sm leading-relaxed">

              Whether traveling for business or exploring Ethiopia,
              our goal is to provide a relaxing and memorable stay.

            </p>



          </div>





          <div className="lg:col-span-7">


            <img

              src="/hotel-building.jpg"

              alt="Lucy Hotel building in Dessie Ethiopia"

              className="
                w-full
                h-96
                object-cover
              "

            />


          </div>



        </div>


      </section>





      {/* GALLERY */}

      <section
        id="gallery"
        className="
          py-16
          bg-hotel-obsidian
        "
      >

        <HotelGallery />

      </section>





      <div id="experiences">

        <ServicesShowcase />

      </div>




      <CulturalGallery />





      {/* BOOKING */}

      <section
        id="booking"
        className="
          py-24
          bg-hotel-obsidian
          px-4
        "
      >


        <div className="max-w-4xl mx-auto">


          <h2
            className="
              text-3xl
              text-center
              font-serif
              text-white
              mb-10
            "
          >

            Request Your Stay

          </h2>



          <div
            className="
              bg-hotel-charcoal
              p-6 sm:p-10
              border border-hotel-gold/15
            "
          >

            <BookingForm />

          </div>


        </div>


      </section>



    </div>

  );

}
