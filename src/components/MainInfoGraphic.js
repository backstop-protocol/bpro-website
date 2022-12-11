import ProductCard from './ProductCard'

export default props => {
  return <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    <div className="main-infographic">
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="dashed-circle">
            <img width="60" height="50" src="logo.svg"/>
          </div>
        </div>
        <div className="card-1">
          <a href="#pythia">
            <ProductCard logo={"pythia.svg"} name="Pythia" short="DeFi Risk Oracle" long="A standard for on-chain risk rating."/>
          </a>
        </div>      
        <div className="card-2">
          <a href="#backstop">
            <ProductCard logo={"backstop.svg"} name="Backstop" short="Liquidation Engine" long="Mitigating risk for DeFi lending platforms with."/>
          </a>
        </div>     
        <div className="card-3">
          <a href="#riskDAO">
            <ProductCard logo={"riskDAO.svg"} name="RiskDAO" short="Risk Assessment" long="Analyzing DeFi economic risks."/>
          </a>
        </div>
    </div>
  </div>
}

