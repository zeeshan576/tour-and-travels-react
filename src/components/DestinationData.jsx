import './DestinationCss.css';


function DestinationData (props){
    return(
        <>
         <div className={props.className}>
                        <div className="des-text">
                            <h2>{props.heading}</h2>
                            <p>{props.Text}</p>
                        </div>
        
                        <div className="images">
                            <img alt="img" src={props.img1}/>
                            <img alt="img" src={props.img2}/>
                        </div>
        </div>
        </>
    )

}

export default DestinationData;