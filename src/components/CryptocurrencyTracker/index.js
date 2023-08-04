import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    this.setState({
      cryptocurrenciesData: data.map(eachCurrency => ({
        id: eachCurrency.id,
        currencyLogoUrl: eachCurrency.currency_logo,
        currencyName: eachCurrency.currency_name,
        usdValue: eachCurrency.usd_value,
        euroValue: eachCurrency.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => (
    <div>
      <Loader type="Rings" color="#ffffff" width={80} height={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container" data-testid="loader">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
