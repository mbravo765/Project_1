import './css/Attractions.css';
import arcade from './img/Stranger_Things_arcade.jpg';
import starcourt from './img/starcourt_mall.webp'

function Attractions() {
  return (
    <div className='main'>
      <div className='header'>
        <h1>Attractions</h1>
        <h3>Come to America's coziest small town!</h3>
        <div className="starcourt">
           <img src={starcourt} alt="starcourt" />
           <p>
              Located outside of 10 Old Highway 77, Starcourt Mall offers a unique collection
              of stores ranging from Claire's to JCPenny. Starcourt is home to a large movie theatre that features the hottest new movies of the summer.
              Starcourt is also home to many foods available in the food court ranging from pizza to ice cream.
              Starcourt also offers classes in yoga, dance, and pilates.
              Starcourt is the perfect destination for those looking to partake in American consumerism.
              Starcourt is the perfect place to spend an afternoon cruising with your friends.
           </p>
        </div>

        <div className="arcade">
          <img src={arcade} alt="arcade" />
          <p>
             Located next to a Family Video Store, Palace Arcade is home to a ton of fun games such as Dragon's Lair.
             Palace Parade is the perfect place to wind down after a heavy spending day at the mall.
             After playing a nice game of Pac-Man, you can go next door to rent a movie.
             Palace Parade offers a lot of fun distractions if you are traveling with children but it is also a nice place for adults to wind down.
          </p>
        </div>


      </div>
    </div>

);

}

export default Attractions;

