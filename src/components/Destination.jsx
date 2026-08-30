import './DestinationCss.css'
import DestinationData from './DestinationData'
import Mountains from '../assets/volcano1.jpg'
import second from '../assets/volcano2.jpg'
import third from '../assets/M3.jpg'
import fourth from '../assets/m4.jpg'



const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you te opportunity to see a lot, within a time frame</p>

            <DestinationData
            className="first-des"
            heading="Taal Volcano , Bantagas"
            Text="Taal Volcano, located in Batangas, Philippines, is one of the country’s most remarkable natural attractions. 
            Surrounded by the beautiful waters of Taal Lake, the volcano offers breathtaking views and a unique landscape.
            Visitors can enjoy scenic boat rides, explore nearby viewpoints, and experience the natural beauty of the area.
            Its peaceful surroundings and stunning scenery make Taal Volcano a popular destination
            for travelers and adventure seekers."
            img1={Mountains}
            img2={second}
            />

            <DestinationData
            className="first-des-Reverse"
            heading="Mt. Daguldul, Batangas"
            Text="Mt. Daguldul in Batangas, Philippines, is a breathtaking destination that offers a perfect combination 
            of adventure, nature, and relaxation. Known for its lush green forests, refreshing mountain air, 
            and scenic hiking trails, Mt. Daguldul attracts travelers and outdoor enthusiasts looking for an 
            unforgettable experience. The journey to the summit takes hikers through dense vegetation, rocky paths,
            and peaceful natural surroundings, providing plenty of opportunities to appreciate the beauty of the 
            Philippine countryside. Along the trail, visitors can enjoy panoramic views of the surrounding mountains
            and coastline, making the challenging climb worthwhile. After the hike, travelers can also explore the nearby
            beaches and relax by the sea. With its beautiful landscapes, challenging trails, and tranquil atmosphere, 
            Mt. Daguldul is an ideal destination for anyone who wants to escape the busy city life and enjoy the natural 
            beauty of Batangas."
            img1={third}
            img2={fourth}
            />
        </div>
    )
}

export default Destination;