

const Pythia = props => {
  const {darkMode} = window
  return <div id="pythia" className="section-container withOverflowingBackground section-2">
    <section className="grid">
      <div className="section-main ">
        <div className="section-header">
          <div className="section-icon-wrapper">
            <img height="35" src="pythia.svg"/>
          </div>
          <div className="section-divider"></div>
          <div className="section-titles-container">
            <div className="section-pre-title">Pythia</div>
            <div className="section-title">DeFi Risk Oracle</div>
          </div>
        </div>
        <div className="section-subtitle">A standard for on-chain risk rating</div>
        <div className="section-txt">Pythia is a decentralized network of validators that provides on-chain risk ratings for platforms and assets in the DeFi space. </div>
        <div className="section-txt">By using Pythia, DAOs can enforce their treasury managers to invest only in platforms that meet their risk appetite, yield strategies can automatically restrict their risk tranches, and more. </div>
        <div className="section-txt"> Pythia is setting the standard for risk oracles in DeFi, helping protocols and developers build risk-aware solutions that can scale safely and maintain user trust.</div>
        <div className="button-container">
          <a href="https://medium.com/b-protocol/the-case-for-an-on-chain-risk-oracle-a5a44bf9048b" target="_blank" role="button" className="outline" rel="noreferrer">Read More</a>
          <a href="https://risk-oracle.bprotocol.org" target="_blank" role="button" rel="noreferrer">Live on Testnet</a>
        </div>
      </div>
      <div className="img-container">
        <img className="section-img"  alt="pythia source code" src={darkMode ? 'images/pythia-code-dark.png' : 'images/pythia-code.png'} />
      </div>
    </section>
  </div>
}

export default Pythia