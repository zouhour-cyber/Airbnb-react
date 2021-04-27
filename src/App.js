import React from 'react';
import Nosrégions from './component/Nosrégions.js';
import {Button} from 'react-bootstrap';
import Sectionexpérience from'./component/sectionexpérience.js';
import Cartespartout from './component/cartespartout.js'
import Menu from './component/navbar.js';
import Footer from './component/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="black text-center"> <a href="#"> Accédez aux dernières informations sur les mesures prises par Airbnb face au COVID-19 </a></div>
      <div className="banner">
     
      <Menu/>

     
     <div classNma="container"> 
   <div className="titre"> 
   <h1 class> En pleine &nbsp;nature</h1>
   <h6>Favoris sélectionnés par Airbnb.</h6>
   <Button className="btn-dark mt-3 rounded" > Trouver l'inspiration</Button>
   </div>
   </div>
   </div>

<h2 className="subtitle"> <b>Explorez les environs  </b> </h2>
   <Nosrégions/>

 <h2 className="subtitle"> <b>Chez vous, partout</b> </h2>
  <Cartespartout/>
  <div className="content">
    <div className="row">
      <div className="col-md-5">
<h3>Devenez hôte</h3>
<h6 className="mt-3"> Gagnez un revenu complémentaire et saisissez de nouvelles opportunités en louant votre logement.</h6>
     <Button className="btn-light mt-2"> En savoir plus</Button>
      </div>

    </div>

  </div>
  <h2 className="subtitle"> <b>Découvrez les expériences</b> </h2>
  <h5 className="activité mb-5">Des activités uniques avec des experts locaux, en personne ou en ligne.
</h5>
<Sectionexpérience/>
<Footer/>
    </div>
  );
}

export default App;
