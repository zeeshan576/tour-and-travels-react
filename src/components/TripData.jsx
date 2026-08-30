import './Trip.css'

function TripData(props){
    return(
        <div className='t-card'>
            <div className='t-image'>
                <img alt='images' src={props.image}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.para}</p>
        </div>
    )

}

export default TripData;