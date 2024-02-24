import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  capital = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCountry = () => {
    const {activeCapital} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      i => i.id === activeCapital,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapital} = this.state
    const country = this.getCountry()
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="inputBox">
            <select
              value={activeCapital}
              onChange={this.capital}
              className="capital"
            >
              {countryAndCapitalsList.map(i => (
                <option key={i.id} value={i.id}>
                  {i.capitalDisplayText}
                </option>
              ))}
            </select>

            <p className="paragraph">is capital of Which Country?</p>
          </div>

          <p className="answer">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
