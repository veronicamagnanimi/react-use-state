import {useState} from "react";
import Languages from "./data/languages"

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);

  return (
    <>
    <div className="container">
    <h1>Learn Web development</h1>
    </div>

    {/*bottoni per ogni linguaggio*/}
    <div className="buttons">
    {Languages.map((language) => (
          <button
            key={language.id}
            onClick={() => setSelectedLanguage(language)} // Cambia il linguaggio selezionato
            className="language-button"
          >
            {language.title}
          </button>
        ))}
      </div>

      {/* Card per mostrare il linguaggio selezionato */}
      <div className="card">
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
      </div>
    
     </>
  )
}

export default App
