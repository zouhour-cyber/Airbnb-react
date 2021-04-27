import Expérience from './expérience.js'

const tabexp=[ 
{img:"./image/expérience.jpg",title:"Expériences",desc:"Prenez part des activités locales, ou que vous soyez"},
{img:"./image/expérienceenligne.jpg",title:"Expériences en ligne", desc:"Activités interactives en direct, animées par des hôtes."},
{img:"./image/collection.jpg", title:"Collection à la une: Envies d'évasion", desc:"Voyagez depuis chez vous grâce aux expériences en ligne."}


]

function Sectionexpérience(){
    return(
        <div>
       <Expérience exp={tabexp}/>
        </div>
    )
}

export default Sectionexpérience