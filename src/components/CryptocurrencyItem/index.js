import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-title-con" data-testid="loader">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-logo"
        />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="usd-euro-con">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
