

const Pythia = props => {
  const {darkMode} = window
  return <div id="pythia" className="section-container withOverflowingBackground section-2">
    <section className="grid">
      <div>
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
        <div className="section-txt">DeFi is all about building on-chain. But on-chain solutions require an on-chain risk rating oracle.</div>
        <div className="section-txt">As DeFi matured, “yolo” and “Testing in Prod” have been recognized as bad risk-management strategies. Today, protocols and devs are looking to build risk-aware solutions so they can scale safely and retain users’ trust.</div>
        <div className="section-txt">Pythia is setting the standard for risk oracles in DeFi. Its decentralized network of validaotrs provides on-chain risk rating of platforms and assets so dapps could build their automated smart contract solutions with enforced risk mitigation options.</div>
        <div className="section-txt">With Pythia, DAOs can enforce their treasury managers to deploy capital only in low risk platforms, yield strategies can restrict their risk tranches automatically, and more...</div>
        <div className="button-container">
          <a href="#" role="button">Read Docs</a>
        </div>
      </div>
      <div className="img-container">
        <img className="section-img" src={darkMode ? 'images/chart-dark.png' : 'images/code-1.jpg'} />
      </div>
    </section>
  </div>
}

export default Pythia