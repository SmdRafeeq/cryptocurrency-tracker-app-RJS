import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCtyptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="values-container">
        <p className="list-coin-value">usd</p>
        <p className="list-coin-value">euro</p>
      </div>
    </div>
  )

  renderCtyptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container" data-testid="loader">
        {this.renderCtyptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              cryptocurrencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container" data-testid="loader">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          className="cryptocurrency-image"
          alt="cryptocurrency"
        />
        {this.renderCtyptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
