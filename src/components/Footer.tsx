import React from 'react';
import hotelConfig from '../config/hotelConfig';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';


export default function Footer() {


  return (

    <footer
      id="contact"
      className="
        bg-hotel-obsidian
        text-gray-400
        py-16
        border-t border-white/[0.05]
      "
    >


      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
        "
      >


        <div
          className="
            grid grid-cols-1
            md:grid-cols-12
            gap-12
            pb-12
            border-b border-white/[0.05]
          "
        >



          {/* BRAND */}

          <div
            className="
              md:col-span-4
              space-y-4
              text-center
              sm:text-left
            "
          >


            <span
              className="
                text-2xl
                font-serif
                tracking-[0.2em]
                text-white
              "
            >

              LUCY

              <span className="text-hotel-gold font-light">
                HOTEL
              </span>

            </span>



            <p
              className="
                text-xs
                leading-relaxed
                text-gray-400
                max-w-sm
              "
            >

              Experience comfortable accommodation
              and Ethiopian hospitality in Dessie,
              Wollo.

            </p>



            <a
              href="#booking"
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-luxury
                text-hotel-gold
                hover:text-hotel-goldLight
                transition
              "
            >

              <MessageCircle className="w-4 h-4"/>

              Reserve Your Stay

            </a>


          </div>





          {/* CONTACT */}

          <div
            className="
              md:col-span-4
              space-y-4
            "
          >


            <span
              className="
                text-xs
                tracking-luxury
                font-bold
                text-white
                uppercase
              "
            >

              Contact & Location

            </span>




            <ul
              className="
                space-y-4
                text-xs
              "
            >


              <li className="flex gap-3">

                <MapPin
                  className="
                    w-4 h-4
                    text-hotel-gold
                    flex-shrink-0
                  "
                />

                <span>
                  Dessie, Wollo, Ethiopia
                </span>

              </li>



              <li className="flex gap-3">

                <Phone
                  className="
                    w-4 h-4
                    text-hotel-gold
                  "
                />

                <span>
                  Contact hotel reception
                </span>

              </li>




              <li className="flex gap-3">

                <Mail
                  className="
                    w-4 h-4
                    text-hotel-gold
                  "
                />

                <span>
                  reservations@lucyhotel.com
                </span>

              </li>



            </ul>


          </div>





          {/* RESERVATION CTA */}

          <div
            className="
              md:col-span-4
              space-y-4
            "
          >


            <span
              className="
                text-xs
                tracking-luxury
                font-bold
                text-white
                uppercase
              "
            >

              Plan Your Visit

            </span>



            <p className="text-xs leading-relaxed">

              Contact our team for room availability,
              reservations, and guest assistance.

            </p>




            <a

              href="`https://wa.me/${hotelConfig.contact.whatsapp}?text=${encodeURIComponent(hotelConfig.booking.defaultMessage)}`"

              target="_blank"

              rel="noopener noreferrer"

              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-hotel-gold
                text-hotel-obsidian
                px-6
                py-3
                text-xs
                font-semibold
                uppercase
                tracking-luxury
                rounded-sm
                hover:bg-hotel-goldLight
                transition
              "

            >

              <MessageCircle className="w-4 h-4"/>

              WhatsApp Reservation

            </a>



          </div>



        </div>





        {/* COPYRIGHT */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            pt-8
            text-[11px]
            text-gray-500
          "
        >


          <p>
            © 2026 Lucy Hotel. All rights reserved.
          </p>



          <p>
            Designed for exceptional guest experiences.
          </p>



        </div>



      </div>


    </footer>

  );

}
