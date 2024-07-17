import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./style.scss"

// Ici, je définis props entre les parentheses afin de pouvoir recuperer les parametres qui sont passés lors de l'appel de mon component sur la page Home
function Card(props) {
    const [isOpen, setIsOpen] = useState(false)

    // Toto et test ne servent a rien, c'est pour illustrer le passage de props entre 2 fichiers
    // Cela me permet de recuperer dans 3 variables les 3 parametres envoyés lors de l'appel de mon component
    // Donc dans logement, l'objet de ma boucle, dans test j'aurai "titi", et dans toto j'aurai "tata"
    const { logement, test, toto } = props
    // const logement = props.logement
    // const test = props.test
    // const toto = props.toto

    return (
        // Puis je peux utiliser logement normalement vu que je l'ai récupéré
        // Quand je clique sur ma div, je défini isOpen avec son contraire, donc si isOpen est vrai, il passe a faux et inversement
        <Link to={"/logement/" + logement.id} className="card" key={logement.id} >
            <img src={logement.cover} alt={logement.title} />
            <div>
                <h2>{logement.title}</h2>
                {/* Si isOpen est vrai, alors j'ajoute la classe active */}
                {/* Sinon je n'ajoute pas de classe (une chaine de caractere vide) */}
                <div className={isOpen ? 'active' : ''}>
                    {logement.description}
                    {logement.location}
                </div>
            </div>
        </Link>
    )
}


export default Card;