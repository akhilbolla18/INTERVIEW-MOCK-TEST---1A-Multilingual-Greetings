import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  changeLang = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    // console.log(activeId)
    const filtterdLanguageGreetingsList = languageGreetingsList.filter(
      each => each.id === activeId,
    )

    // console.log(filtterdLanguageGreetingsList)
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="h1">Multilingual Greetings</h1>
          <ul className="lang-tabs">
            {languageGreetingsList.map(eachItem => (
              <li className="list" key={eachItem.id}>
                <button
                  className="active_tab"
                  type="button"
                  onClick={() => this.changeLang(eachItem.id)}
                >
                  {eachItem.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <img
            src={filtterdLanguageGreetingsList[0].imageUrl}
            alt={filtterdLanguageGreetingsList[0].imageAltText}
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default App
