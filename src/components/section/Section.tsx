import React from 'react'

export const Section = (props : {}) => {
    return (
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

    )
}
