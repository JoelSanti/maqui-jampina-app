import  { useState } from 'react';
import { DatosSlider } from './DatosSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='flex mb-20 mt-10 md:mb-36 slider lg:px-28 text-center lg:mb-40 lg:mt-16'>

         <div className="h-10 px-4 py-2 shadow-md mx-auto  my-auto
         transition duration-500 ease-in-out hover:text-teal-400 hover:bg-teal-50 transform hover:-translate-y-1 hover:scale-110 ...
         " onClick={prevSlide} >
            <FontAwesomeIcon icon={faAngleDoubleLeft} className=" " />
         </div>
  <div className="flex h-40 md:h-96 text-sm lg:text-auto lg:w-6/12 lg:h-96  mx-auto">
           
        {DatosSlider.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
               <div className=" ">
                    <img src={slide.image} alt='travel image' className='image rounded-xl w-12/12' />
                    <h1 className="font-medium">{slide.titulo}</h1>
               </div>
                
              )}
            </div>
          );
        }
        
        )}
        
  </div>
       <div className="h-10 px-4 py-2 shadow-md mx-auto my-auto
       transition duration-500 ease-in-out hover:text-teal-400 hover:bg-teal-50 transform hover:-translate-y-1 hover:scale-110 ...
       "onClick={nextSlide}>
      <FontAwesomeIcon icon={faAngleDoubleRight} className="" />
      </div>
    </section>
  );
};

export default Slider;
