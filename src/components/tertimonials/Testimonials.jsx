import React from 'react'
import './testimonials.css'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src="https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Hulk-icon.png" alt="Hulk" />
          </div>
          <h5 className='client_name'>Hulk</h5>
            <small className='client_review'>
              Petite boulangerie de quartier, le pain y est de bonne qualité et les vendeurs.euses sympas comme tout. Le choix de variété de pains mis en vente est relativement large, en revanche les viennoiseries ne sont pas de très bonne qualité à mon goût.  Je recommande tout de même cette enseigne !
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src="https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-War-Machine-icon.png" alt="Hulk" />
          </div>
          <h5 className='client_name'>Stark</h5>
            <small className='client_review'>
              Les pâtisseries sont bonnes            
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src="https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Thor-icon.png" alt="Hulk" />
          </div>
          <h5 className='client_name'>Thor</h5>
            <small className='client_review'>
            Nouveau propriétaire, acceuille chaleureux et caissiere tres souriante pain de haute qualite et tres bon je recommande cette boulangerie fortement
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src="https://icons.iconarchive.com/icons/crountch/one-piece-character/128/Monkey-D-Luffey-icon.png" alt="Hulk" />
          </div>
          <h5 className='client_name'>Luffey</h5>
            <small className='client_review'>
            Toujours très agréable pour l accueil et le pain est bon ! C'est ma nouvelle boulangerie :)            </small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials