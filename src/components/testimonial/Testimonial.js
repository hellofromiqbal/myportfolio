import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Eleanor Brigetti',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa enim praesentium officiis quia vero, deserunt, laudantium repellendus reiciendis nam quas maiores cum autem provident animi cupiditate ipsam quae consequuntur!'
  },
  {
    avatar: AVTR2,
    name: 'Shaun Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa enim praesentium officiis quia vero, deserunt, laudantium repellendus reiciendis nam quas maiores cum autem provident animi cupiditate ipsam quae consequuntur!'
  },
  {
    avatar: AVTR3,
    name: 'Blake Brightt',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa enim praesentium officiis quia vero, deserunt, laudantium repellendus reiciendis nam quas maiores cum autem provident animi cupiditate ipsam quae consequuntur!'
  },
  {
    avatar: AVTR4,
    name: 'Shania Nuzul',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa enim praesentium officiis quia vero, deserunt, laudantium repellendus reiciendis nam quas maiores cum autem provident animi cupiditate ipsam quae consequuntur!'
  }
];

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map((datum, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={datum.avatar} alt={datum.name} />
            </div>

            <h5 className='client__name'>{datum.name}</h5>
            <small className='client__review'>{datum.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
 
export default Testimonial;