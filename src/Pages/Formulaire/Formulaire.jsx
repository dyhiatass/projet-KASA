import { useState } from 'react';
import './style.scss';

function Formulaire() {

  // Je crée directement tous mes states dont j'aurai besoin en haut de ma fonction App()
  // Toujours de la même maniere : const [state, setState] = useState(valeurParDefaut)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  // Quand on récupère ensuite les informations de localStorage, par contre, on recoit une chaine de caractere inutilisable
  // Pour contrer ça, on utilise JSON.parse() qui va transformer cette chaine de caractere en objet ou tableau, selon sa forme d'origine
  // Ici, ma valeur par défaut sera ce que je récupère de mon localstorage, ou un tableau vide si mon localstorage est vide
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('data')) ?? [])


  const handleForm = (e) => {
    // J'annule le comportement par défaut des formulaires HTML avec le e.preventDefault()
    // Cela évite le rechargement de page lors de la soumission du form
    e.preventDefault()


    // Je construit un objet avec toutes les données de mon formulaire, afin de les avoir toutes dans une seule et meme variable
    const object = {
      firstName,
      lastName,
      email,
      subject,
      message
    }


    // Dans un nouveau tableau, je copie les valeurs de l'actuel tableau contacts, auquel je rajoute object a la fin
    const newArray = [...contacts, object]

    // Je redefinis mon state contacts avec la valeur du nouveau tableau
    setContacts(newArray)

    // Le localStorage n'accepte que les chaines de caracteres (des chiffres et des lettres)
    // Donc nous devons transformer notre objet data en chaine de caractere pour qu'il puisse etre stocké
    // La fonction JSON.stringify permet de transformer des tableaux et objets en chaine de caractere et donc de pouvoir 
    // envoyer nos informations au localStorage
    // J'envois a mon localStorage mon nouveau tableau
    // Je n'envois pas mon state "contacts" directement, car celui ci est mis a jour de maniere asynchrone
    // Donc la variable contacts n'est pas encore à jour lors du setItem
    localStorage.setItem('data', JSON.stringify(newArray))

    // Je remet à 0 tous mes states
    // Mettre à 0 mes states va mettre à jour mes inputs car dans chaques input j'ai précisé value={firstName} (avec chaque state pour chaque input)
    setFirstName('')
    setLastName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <div className="App">
      <h1>Formulaire de contact</h1>
      {/* Lors de la soumission de mon formulaire, j'appel la fonction handleForm */}
      {/* La soumission s'effectue au clic sur un bouton, sur un input de type submit, ou quand on appuis sur entrée depuis un input */}
      <form onSubmit={handleForm}>
        {/* le htmlFor (juste for en HTML simple) permet de lier un label avec un input via l'ID de l'input */}
        {/* Ce qui permet de focus l'input quand on clic sur le label */}
        <label htmlFor="firstName">Prénom</label>
        {/* L'avantage de définir la value avec le state correspondant est que si on modifie le state, l'input se mettra a jour tout seul */}
        {/* le onChange permet de mettre à jour le state a chaque changement de notre input, que ce soit un ajout ou une suppression de caractere */}
        <input value={firstName} type="text" name='firstName' id="firstName" onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">Nom</label>
        <input value={lastName} type="text" name='lastName' id="lastName" onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input value={email} type="text" name='email' id="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="subject">Sujet</label>
        <input value={subject} type="text" name='subject' id="subject" onChange={(e) => setSubject(e.target.value)} />

        <label htmlFor="message">Message</label>
        <textarea value={message} name="message" id="message" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>

        <button>Envoyer</button>
      </form>

      {/* Je fais une boucle sur la variable (le state) "contacts" avec le .map */}
      {/* Le .map prend en parametre un callback, une fonction, anonyme ou non, qui va traiter les elements de la boucle 1 par 1 */}
      {/* Ici, je récupère chaque element de mon tableau à l'unité sous la variable "element" */}
      {/* Ce qui me permet d'acceder aux propriétées de l'object directement */}
      {contacts.map((element, index) => (
        // A l'interieur des parentheses, toujours une seul balise au 1er niveau, puis autant de balise que l'on veux a l'interieur
        // Je ne peux pas avoir 2 div juste après mes parentheses, mais je peux avoir une div dans ma div
        <div key={index}>
          <p>Prenom : {element.firstName}</p>
          <p>Nom : {element.lastName}</p>
          <p>email : {element.email}</p>
          <p>Sujet : {element.subject}</p>
          <p>Message : {element.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Formulaire;