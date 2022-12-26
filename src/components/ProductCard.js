
const shortStyle = {
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.6rem',
  lineHeight: '19px',
  textAlign: 'center',
  marginBottom: 'calc(var(--spacing) / 2)',
  color: '#23A455',
}

const ProductCard = props => {
  const {logo, name, short, long} = props
  return <div className="rectangle">
    <div className="green-circle">
      <img className="card-logo" src={logo}/>
    </div>
    <div className="card-name">{name}</div>
    <div className="card-txt"><b>{short}</b></div>
    <div className="card-txt">{long}</div>
    <a>Learn More</a>
  </div>
}

export default ProductCard