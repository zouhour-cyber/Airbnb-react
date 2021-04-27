

function Expérience(props){
    return(

<div classNam=""> 
<div className="d-flex justify-content-around"> 
{props.exp.map(el => 
    <div className="cardexp">
<div> <img src={el.img} className="imgexp mb-3"/> </div>
 <b> <h6> {el.title}</h6> </b>
  <p className="worp-wrap">  {el.desc}</p>
</div> 
 )}
</div>


</div>

    )

}

export default Expérience 