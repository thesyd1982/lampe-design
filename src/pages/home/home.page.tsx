import { Header, Main, Footer, Tile } from "../../components"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./home.scss"
import { SlideProps } from "../../types/commonTypes";
import { ContactForm, Services } from "./sections";

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
            id: 1,
            image: "/hero1.jpg",
            link: "",
            title: "DARIZEENNA",
            active: true,
            description: "decouvrez notre catalogue",
        },
        {
            id: 2,
            image: "hero2.jpg",
            link: "",
            title: "Test slide2",
            active: true,
            description: "le deuxieme slide",
        },
        {
            id: 3,
            image: "hero3.jpg",
            link: "",
            title: "Test slide3",
            active: true,
            description: "le troisème slide",
        },
    ]

    const links = [
        { id: "header", text: "ACCUEIL", href: "#header" },
        { id: "home", text: "PHARE", href: "/#home" },
        { id: "catalogue", text: "CATALOGUE", href: "/#catalogue" },
        { id: "services", text: "SERVICES", href: "/#services" },
        { id: "about", text: "A PROPOS", href: "/#about" },
        { id: "contact", text: "CONTACT", href: "/#contact" },
    ]

    const sections = [{
        sectionId: "home",
        children:
            <Tile
                src="woody-back.jpg"
                alt="woody-back"
                w="30%"
                h="auto"
                direction={false}
            >
                <h2 className="title2">Produit Phare</h2>
                <h3 className="brand">Lampe Etagère</h3>
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
        sectionId: "catalogue",
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
        sectionId: "services",
        children: <Services />
    },
    {
        sectionId: "about",
        children:
            <Tile
                src="carpenter1.jpg"
                alt="carpenter"
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
        sectionId: "contact",
        children:
            <Tile
                src="contact.jpg"
                alt="contact"
                w="30%"
                h="60%"
                direction={false}
            >
                <h2 className="title2">Contact</h2>
                <p className="normal">Un devis, une information, une demande personnalisée etc... </p>
                <p className="normal">N'hésitez pas à nous contacter à tout moment.</p>
                <ContactForm />
            </Tile>

    }

    ]

    return (
        <div className="homepage" id="homepage">
            <Header links={links} slides={carouselSlides} />
            <Main sections={sections} />
            <Footer />
        </div>
    )
}
export default Home
