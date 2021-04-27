import Carterégion from './carterégion.js'
const tabcarte=[
    {img:"./image/tunis.jpg",title:"Tunis",desc:"temps de trajet:15 min"},
    {img:'./image/marsa.jpg' ,title:"Marsa", desc:"temps de trajet:30 min"},
    {img:'./image/kelibia.jpg',title:"kelibia",desc:"2 heures de route"},
    {img:'./image/yasminehamamet.jpg',title:"Yasmine Hammamet",desc:"1 heure de route"},
    {img:'./image/hamamet.jpg', title:"Hammamet Sud", desc:"1 heure de route"},
    {img:'./image/hergla.jpg', title:"Hegla", desc:"1.5 heures de route"},
    {img:'./image/korba.jpg', title:'Korba',desc:"1.5 heures de route"},
    {img:'./image/aghir.jpg', title:'Aghir', desc:"8 heures de route"}
]

function Nosrégions(){
    return(

<div>

<div className="d-flex flex-wrap justify-content-between m-5">
{tabcarte.map(el =>
<div> 
<Carterégion  img={el.img} titre={el.title} description={el.desc}/>

</div>

)

}
</div>

</div>

    )
}


export default Nosrégions