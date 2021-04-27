import Carte from'./carte.js'

const Allcarte=[
    {img:"./image/tunis.jpg",title:"Logements entiers"},
    {img:"./image/logunique.jpg", title:"Logements uniques"},
    {img:"./image/fermenature.jpg" ,title:"Ferme et nature"},
    {img:"./image/animaux.jpg", title:"Animaux de compagnie acceptés"
    }
]

function Cartespartout(){
    return(
        <div>
       <div className="d-flex flex-wrap justify-content-between m-5"> 
      { Allcarte.map(el =>
      <div>
          <Carte img={el.img} titre={el.title}/>
     </div>
      
      
      
      )}

       </div>
        </div>
    )
}

export default Cartespartout