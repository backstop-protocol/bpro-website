
const nameStyle = {
  fontStyle: 'normal',
  fontWight: '600',
  fontSize: '21px',
  lineHeight: '25px',
  textAlign: 'center',
  color: '#23A455',
  marginBottom: 'calc(var(--spacing) / 2)',
}

const shortStyle = {
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  textAlign: 'center',
  marginBottom: 'calc(var(--spacing) / 2)',
}

const ProductCard = props => {
  const {logo, name, short, long} = props
  return <div className="rectangle">
    <div className="green-circle">
      <img src={logo}/>
    </div>
    <div style={nameStyle}>{name}</div>
    <div style={shortStyle}>{short}</div>
    <div style={shortStyle}>{long}</div>
    <img src="images/right-arrow.svg"/>
  </div>
}

export default ProductCard