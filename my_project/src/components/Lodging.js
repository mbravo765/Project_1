import './css/Lodging.css';
import wheeler from './img/wheelers.png'
import lake from './img/loverslake.jpg'

function Lodging() {
  return (
    <div className='main'>
      <div className='header'>
         <h1>Lodging</h1>
         <h3>Hawkins may be a small town, but it welcomes strangers with open arms</h3>
         <div className="wheeler">
           <img src={wheeler} alt="wheeler" />
             <p>
              If you are on the run from government laboratory, you just might be in luck at the Wheeler's house.
              Mike and his friends will help you hide in the basement.
              Some of the breakfast favorites include frozen Ego waffles. At the Wheeler house, you won't just have a safe place to stay,
              you will also find friends.
             </p>
         </div>

         <div className="loverslake">
           <img src={lake} alt="lake" />
              <p>
                Shaped like a heart in the middle of the woods lies Lover's Lake.
                Lover's Lake is a perfect place to camp out, especially if you are in hiding.
                This lake is the epitome of nature's beaty and it may even transcend you into other dimensions.
              </p>
         </div>

      </div>
    </div>
);
}


export default Lodging;

