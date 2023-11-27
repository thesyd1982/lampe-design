import {Header, Main, Footer, Tile } from "../../components"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./home.scss"
import { SlideProps } from "../../types/commonTypes";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
            // Vérifiez si l'URL contient un ancre
            if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));

            // Si l'élément avec l'ancre existe, faites défiler la vue jusqu'à cet élément
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
            }
            }, [location]);

const carouselSlides: SlideProps[] = [
{
        id:1,
        image:"/hero1.jpg",
        link:"",
        title:"DARIZEENNA",
        active:true,
        description:"decouvrez notre catalogue",
},
{       id:2,
        image:"hero2.jpg",
        link:"",
        title:"Test slide2",
        active:true,
        description:"le deuxieme slide",
},
]

    const links = [
    {id:"header",text:"ACCUEIL",href:"#header"},
    {id:"product",text:"PRODUITS",href:"/#product"},
    {id:"services",text:"SERVICES",href:"/#services"},
    {id:"about",text:"A PROPOS",href:"/#about"},
    {id:"contact",text:"CONTACT",href:"/#contact"},
    ]

        const sections = [ {
sectionId:"home" ,
          children:
              <Tile
              src="woody-back.jpg"
              alt="woody-back"
              w="30%"
              h="auto"
              direction={false}
          >
              <h2 className="title2">Lampe design</h2>
              <h3 className="brand">Darizeenna</h3>
              <p className="normal">
              Nous avons le plaisir de vous presenter le
              produit phare de nôtre marque la lampe de chevet DARIZEENNA.
              <br />
              Ce produit avec son design minimaliste inspiré de
              l'artisanat local, est créer par un artisant sur la région de
              constantine, c'est un extrait de savoir faire forger dans un bois noble.
              </p>
              </Tile>
        },
    {
sectionId:"product",
          children:
              <Tile
              src="details.jpg"
              alt="details de la lampe"
              w="30%"
              h="auto"
              direction={true}
          >
              <h2 className="title2">Details</h2>
              <p className="normal">
              <ul>
              <li>Dimension</li>
              <li>Matiere</li>
              <li>durée de fabrication</li>
              <li>méthode de fabrication</li>
              </ul>
              </p>
              </Tile>

    },
    {
sectionId:"services",
          children:
              <Tile
              src="woody-back2.jpg"
              alt="woody-back"
              w="30%"
              h="60%"
              direction={false}
          >
              <h2 className="title2">Nos Services</h2>
              <p className="normal">
              <ul>
              <li>Livraison</li>
              <li>Vente pour les particulier</li>
              <li>Vente pour les professionels</li>
              <li>Personalisation du produit</li>
              </ul>
              </p>
              </Tile>
    },
    {
sectionId:"about",
          children:
              <Tile
              src="outlets.jpg"
              alt="outlets"
              w="30%"
              h="60%"
              direction={true}
          >
              <h2 className="title2">À propos</h2>
              <p className="normal">
              <strong>DARIZEENNA</strong> Est une boutique qui met en relation
              les artisants locaux et des clients amateur de qualité et de gout
              et leurs presenter nos métiers de main.
              </p>
              </Tile>
    },
    {
sectionId:"contact",
          children:
              <Tile
              src="woody-back2.jpg"
              alt="woody-back"
              w="30%"
              h="60%"
              direction={false}
          >
              <h2 className="title2">Contact</h2>
              <p className="normal">Nous contacter</p>
              </Tile>

    }

    ]

        return (
                <div className="homepage" id="homepage">
                <Header links={links}  slides={carouselSlides}/>
                <Main sections={sections}/>
                <Footer/>
                </div>
               )
}
export default Home
