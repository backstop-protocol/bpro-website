
const RiskDao = props => {
  const {darkMode} = window
  return <div id="riskDAO" className="section-container withOverflowingBackground-4 section-4">
    <section className="grid">
      <div className="section-main">
        <div className="section-header">
          <div className="section-icon-wrapper">
            <img height="35" src="riskDAO.svg"/>
          </div>
          <div className="section-divider"></div>
          <div className="section-titles-container">
            <div className="section-pre-title">RiskDao</div>
            <div className="section-title">DeFi Economic Risk Assessments</div>
          </div>
        </div>
        <div className="section-subtitle">Stress Testing, Analyzing, and Monitoring Economic Risks in DeFi</div>
        <div className="section-txt">Risk DAO is a service DAO focused on providing a new, open-source risk assessment framework, associated audits, and dashboards to stress test, monitor, and manage risk in DeFi lending protocols as well as stablecoins, L1 and L2 networks.</div>
        <div className="section-txt">B.Protocol was part of the launchpad for RiskDAO and a current partner.</div>
        <div className="button-container">
          <a href="#" role="button">Browse Dashboards</a>
        </div>
      </div>
      <div className="img-container">
        <img className="section-img" src={darkMode ? "images/graph-dark.png" : "images/graph.png"} />
      </div>
    </section>
  </div>
}

export default RiskDao