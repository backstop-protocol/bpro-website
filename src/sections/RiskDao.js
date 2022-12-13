const styles = {
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 'calc(var(--spacing) * 2)',
  },
  iconWrapper: {
    width: '88px',
    height: '88px',
    background: '#D4F1E1',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '0',
    height: '64px',
    borderRight: '6px solid #23A455',
    margin: '0 calc(var(--spacing) * 2)',
  },
  titlesContainer: {
    width: 'calc(100% - 88px - 88px)',
  },
  preTitle: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '134.02%',
    color: '#23A455',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '134.02%',
    color: 'var(--contrast)',
  },
  subTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '134.02%',
    color: '#23A455',
    margin: 'var(--spacing) 0',
  },
  txt: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '175.52%',
    color: 'var(--contrast)',
    marginBottom: 'calc(var(--spacing) / 2)',
  },
}


const RiskDao = props => {
  const {darkMode} = window
  return <div id="riskDAO" className="section-container withOverflowingBackground">
    <section className="grid">
      <div>
        <div style={styles.header}>
          <div style={styles.iconWrapper}>
            <img height="35" src="riskDao.svg"/>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.titlesContainer}>
            <div style={styles.preTitle}>RiskDao</div>
            <div style={styles.title}>DeFi Economic Risk Assessments</div>
          </div>
        </div>
        <div style={styles.subTitle}>Stress Testing, Analyzing, and Monitoring Economic Risks in DeFi</div>
        <div style={styles.txt}>Risk DAO is a service DAO focused on providing a new, open-source risk assessment framework, associated audits, and dashboards to stress test, monitor, and manage risk in DeFi lending protocols as well as stablecoins, L1 and L2 networks.</div>
        <div style={styles.txt}>B.Protocol was part of the launchpad for RiskDAO and a current partner.</div>
        <div style={{margin: 'var(--spacing) 0'}}>
          <a style={{marginRight: 'var(--spacing)'}} href="#" role="button">Browse Dashboards</a>
        </div>
      </div>
      <div className="img-container">
        <img className="section-img" src={darkMode ? "images/bad-debt-dark.png" : "images/bad-debt.png"} />
      </div>
    </section>
  </div>
}

export default RiskDao