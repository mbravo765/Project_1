import './css/Restaurants.css';
import enzos from './img/enzo.webp'
import scoops from './img/Scoops.webp'


function Restaurants() {
  return (
    <div className='main'>
       <div className='header'>
          <h1>Restaurants</h1>
             <h3>Hawkins, Indiana is home to many small town American restuarants. These restaurants
             are located in fun areas throughout the town, including near the mayor's office and 
             inside the luxurious Starcourt mall. </h3>
       </div>
       <div className="enzos">
             <img src={enzos} alt="enzo's restaurant" />
             <p> Enzos Restaurant is a classic American Italian restaurant. Enzos is perfect for date nights and for family outings.
                 Feel free to add this location to your iternary when you visit Hawkins.
             </p>
       </div>

       <div className="scoops">
          <img src={scoops} alt="scoops ahoy" />
             <p> Scoops Ahoy is an ice cream classic destination for cool pirates like you.
                 With friendly customer service and free ice cream samples,
                 you will never want to leave Starcourt Mall.
             </p>
       </div>

   </div>
);
}

export default Restaurants;
