
import './App.css'
import Dictionary from './Dictionary.jsx'

export default function App() {

  return (
    <div className= "App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <h2>What word do you want to look up?</h2>
        </header>

        <main>
          <Dictionary />
        </main>


    <footer> This project was coded by <a 
        href="https://github.com/StephieOj" target="_blank"rel='noopener noreferrer'> <strong>Stephie Oj 💕</strong></a>  and is <a
        href="https://github.com/StephieOj/react-dictionary" target="_blank"rel='noopener noreferrer'> <strong>open-sourced on GitHub</strong> </a> and is hosted on <a 
        href="https://stephieoj-react-dictionary.netlify.app/" target="_blank" rel='noopener noreferrer'> <strong>Netlify</strong></a>
        <br />
        <br />
        <img className="stephie" src="/src/assets/stephieoj.png" alt="stephieoj" height="80px" width="80px" />
    </footer>

    </div>
  </div>   
  )
}

