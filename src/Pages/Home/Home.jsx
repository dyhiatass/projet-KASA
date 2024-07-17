import { useEffect, useState } from 'react';
// ./ est pour le dossier actuel
import './style.scss';
// ../ pour le dossier précédent
// J'importe le component Card depuis son emplacement dans le dossier Component/Card
import Card from '../../Component/Card/Card'

function Home() {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch("https://titi.startwin.fr/logements")
            .then(res => res.json())
            .then(data => setLogements(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <main className="home">
                <div className="background">
                    <img src="/background.jpg" alt="background" />
                    <div>
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </div>
                <div className="list">
                    {logements.map(logement => (
                        // J'appel mon component Card en lui passant en parametres mon objet logement sous le nom logement
                        // le texte titi sous le nom test
                        // le texte tata sous le nom toto
                        // Je pourrais donc recuperer 3 variables : logement, test et toto dans mon compontent grace aux props
                        <Card logement={logement} test="titi" toto="tata" />
                    ))}
                </div>
            </main>
        </>
    );
}

export default Home;