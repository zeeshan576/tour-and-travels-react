import './Trip.css'
import TripData from './TripData';
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/8.jpg'
import Trip3 from '../assets/6.jpg'

function Trip(){
    return(
        <div className='Trip'>
            <h1>Recents Trips</h1>
            <p>You can discover unique destinations using Google maps.</p>
            <div className='tripcard'>
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                para="Indonesia is a perfect destination for travelers looking for a memorable mix of adventure, 
                culture, and natural beauty. From the stunning beaches of Bali and the lush landscapes of Ubud to
                the dramatic volcanoes and peaceful islands, every part of Indonesia offers something unique. 
                During a recent trip, visitors can explore traditional villages, enjoy local cuisine, discover
                beautiful temples, and experience breathtaking sunsets by the ocean. Whether you are looking for 
                relaxation, outdoor adventure, or a chance to experience a new culture, Indonesia provides an
                unforgettable travel experience filled with beautiful moments and exciting discoveries."
                />

                 <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                para="Malaysia is a captivating destination that offers a perfect blend of modern cities, 
                rich culture, tropical landscapes, and unforgettable adventures. From the impressive skyline 
                of Kuala Lumpur and the iconic Petronas Twin Towers to the beautiful beaches of Langkawi and the 
                lush highlands of Cameron Highlands, Malaysia has something for every traveler. Visitors can explore 
                vibrant markets, historic streets, colorful temples, and delicious local cuisine while experiencing 
                the warm hospitality of the country. Whether you're seeking adventure, relaxation, shopping, or 
                cultural experiences, a trip to Malaysia can be filled with exciting discoveries and beautiful memories."
                />

                 <TripData
                image={Trip3}
                heading="Trip in France"
                para="France is a dream destination for travelers who want to experience stunning architecture, 
                rich history, beautiful landscapes, and world-famous cuisine. From the iconic Eiffel Tower and 
                charming streets of Paris to the picturesque countryside, magnificent castles, and breathtaking 
                French Riviera, every corner of France offers something special. Visitors can explore historic landmarks,
                enjoy delicious local food, discover art and culture, and relax in beautiful towns surrounded by scenic views.
                Whether you're looking for romance, adventure, history, or simply an unforgettable vacation, 
                France offers a truly memorable travel experience."
                />
            </div>
        </div>
    );

}

export default Trip;