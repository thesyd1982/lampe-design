import "./main.scss";
import Tile from "../tile/Tile";
function Main() {
  return (
    <main className="main">
      <div className="container">
        <section className="section section--home">
          <Tile
            src="woody-back.jpg"
            alt="woody-back"
            w="40%"
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
        </section>

        <section className="section section--product">
          <Tile
            src="green-back.jpg"
            alt="woody-back"
            w="20%"
            h="80%"
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
        </section>

        <section className="section section--services">
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
        </section>

        <section className="section section--about">
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
        </section>

        <section className="section section--contact">
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
        </section>
      </div>
    </main>
  );
}

export default Main;
