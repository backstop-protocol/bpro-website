

const Backstop = props => {
  const {darkMode, isMobile} = window
  return <div id="backstop" className="section-container withOverflowingBackground-1 section-3">
  <section className="grid">
      {!isMobile && <div  className="img-container reverse">
        <img className="section-img" src={darkMode ? "images/backstop-dark.png" : "images/backstop.png"} />
      </div>}
      <div>
        <div className="section-header">
          <div className="section-icon-wrapper">
            <img height="35" src="backstop.svg" />
          </div>
          <div className="section-divider"></div>
          <div className="section-titles-container">
            <div className="section-pre-title">Backstop</div>
            <div className="section-title">DeFi Liquidation Engine</div>
          </div>
        </div>
        <div className="section-subtitle">A robust liquidation primitive mitigating risk for lending platforms and their users.</div>
        <div className="section-txt">The Backstop detaches lending platforms from their dependency on 3rd party flashloan bot operators and DEX liquidity, letting their communities secure the platforms they use, while gaining from clearing risky positions from it and avoiding bad debt.</div>
        <div className="section-txt">The Backstop AMM (B.AMM) enables users to deposit funds into backstop pools, and this liquidity is used to execute liquidations on integrated platforms. Once a liquidation takes place the smart contract pulls the needed funds from the backstop to facilitate the liquidation, and automatically puts the seized collateral for sale. Once sold, the return is deposited back to the backstop pool, and profits are accrued.</div>
        <div className="button-container">
          <a href="#" role="button">Deposit into a Backstop pool</a>
          <a href="#" role="button" className="outline">Read Docs</a>
        </div>
      </div>
      {isMobile && <div  className="img-container reverse">
        <img className="section-img" src={darkMode ? "images/backstop-dark.png" : "images/backstop.png"} />
      </div>}
    </section>
  </div>
}

export default Backstop