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
    color: '#393939',
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
    color: '#000000',
    marginBottom: 'calc(var(--spacing) / 2)',
  },
}


const Pythia = props => {
  return <div id="pythia" className="section-container withOverflowingBackground">
    <section className="grid">
      <div>
        <div style={styles.header}>
          <div style={styles.iconWrapper}>
            <img height="35" src="pythia.svg"/>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.titlesContainer}>
            <div style={styles.preTitle}>Pythia</div>
            <div style={styles.title}>DeFi Risk Oracle</div>
          </div>
        </div>
        <div style={styles.subTitle}>A standard for on-chain risk rating</div>
        <div style={styles.txt}>DeFi is all about building on-chain. But on-chain solutions require an on-chain risk rating oracle.</div>
        <div style={styles.txt}>As DeFi matured, “yolo” and “Testing in Prod” have been recognized as bad risk-management strategies. Today, protocols and devs are looking to build risk-aware solutions so they can scale safely and retain users’ trust.</div>
        <div style={styles.txt}>Pythia is setting the standard for risk oracles in DeFi. Its decentralized network of validaotrs provides on-chain risk rating of platforms and assets so dapps could build their automated smart contract solutions with enforced risk mitigation options.</div>
        <div style={styles.txt}>With Pythia, DAOs can enforce their treasury managers to deploy capital only in low risk platforms, yield strategies can restrict their risk tranches automatically, and more...</div>
        <div style={{margin: 'var(--spacing) 0'}}>
          <a style={{marginRight: 'var(--spacing)'}} href="#" role="button">Read Docs</a>
        </div>
      </div>
      <div className="img-container">
        <img className="section-img" src="images/code-1.jpg" />
      </div>
    </section>
  </div>
}

export default Pythia