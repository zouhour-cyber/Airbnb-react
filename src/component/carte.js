function Carte(props){
return(

    <div>
<div className=""> 
<div> <img src={props.img} className="imgcarte mb-3" /> </div>
 <b><h6> {props.titre}</h6> </b>

</div>



    </div>
)
}

export default Carte