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
  }
}

const Backstop = props => {
  return <div id="backstop" className="section-container withOverflowingBackground-1">
  <section className="grid">
      <div  className="img-container reverse">
        <img className="section-img" src="images/backstop.png" />
      </div>
      <div>
        <div style={styles.header}>
          <div style={styles.iconWrapper}>
            <img height="35" src="backstop.svg" />
          </div>
          <div style={styles.divider}></div>
          <div style={styles.titlesContainer}>
            <div style={styles.preTitle}>Backstop</div>
            <div style={styles.title}>DeFi Liquidation Engine</div>
          </div>
        </div>
        <div style={styles.subTitle}>A robust liquidation primitive mitigating risk for lending platforms and their users.</div>
        <div style={styles.txt}>The Backstop detaches lending platforms from their dependency on 3rd party flashloan bot operators and DEX liquidity, letting their communities secure the platforms they use, while gaining from clearing risky positions from it and avoiding bad debt.</div>
        <div style={styles.txt}>The Backstop AMM (B.AMM) enables users to deposit funds into backstop pools, and this liquidity is used to execute liquidations on integrated platforms. Once a liquidation takes place the smart contract pulls the needed funds from the backstop to facilitate the liquidation, and automatically puts the seized collateral for sale. Once sold, the return is deposited back to the backstop pool, and profits are accrued.</div>
        <div style={{margin: 'var(--spacing) 0'}}>
          <a style={{marginRight: 'var(--spacing)', marginBottom: 'var(--spacing)'}} href="#" role="button">Deposit into a Backstop pool</a>
          <a href="#" role="button" className="outline">Read The Docs</a>
        </div>
      </div>
    </section>
  </div>
}

export default Backstop