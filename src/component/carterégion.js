function Carterégion(props){
    return(
        <div>

<div className="d-flex justify-content-between m-2"> 

<div > <img src={props.img}  className="imgrégion" /> </div>
<div className="card-title text-justify px-2">
     <b> {props.titre}</b>
      <p> {props.description}</p>
</div>

</div>

        </div>
    )
}

export default Carterégion