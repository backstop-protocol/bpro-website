const styles = {
  footer: {background: '#1F202F', },
  main: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logo: {
    margin: '70px 0 20px 0',
  },
  linkRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    margin: 'var(--spacing)',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FFFFFF',
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  socialLink: {margin: 'calc(var(--spacing) / 2)'},
  copyright: {
    width: '50%',
    borderTop: '1px solid rgba(255, 255, 255, 0.4)',
    padding: 'calc(var(--spacing) / 2)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '22px',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 'auto',
    marginTop: '20px'
  },
  whiteCircle: {
    border: '1.5px solid white',
    borderRadius: '50%',
    width: '37px',
    height: '37px',
    display: 'flex',
    justifyContent: 'center',
    padding: '3px'
  }
}

const Footer = props => {
  return <div >
    <footer style={styles.footer}>
      <div style={styles.main}>
        <img style={styles.logo} src="logo.svg"/>
        <div style={styles.linkRow}>
          <a style={styles.link} href="#">Home</a>
          <a style={styles.link} href="#">About</a>
          <a style={styles.link} href="#">Docs</a>
          <a style={styles.link} href="#">Dashboard</a>
          <a style={styles.link} href="#">Contact</a>
          <a style={styles.link} href="#">App</a>
        </div>
        <div style={styles.socialRow}>
          <a style={styles.socialLink} href="https://github.com/backstop-protocol"><img src="images/social/Group 6.svg"/></a>
          <a style={styles.socialLink}  href="https://discord.com/invite/bJ4guuw"><img src="images/social/Group 7.svg"/></a>
          <a style={styles.socialLink}  href="https://twitter.com/bprotocoleth"><img src="images/social/Group 8.svg"/></a>
          <a style={styles.socialLink}  href="https://medium.com/b-protocol"><img src="images/social/Group 24.svg"/></a>
          <a style={styles.socialLink} href="https://forum.bprotocol.org/"><div style={styles.whiteCircle}><img src="images/social/cw-white.svg"/></div></a>
        </div>
      </div>
      {/* <div style={styles.copyright}>
        © 2020 Smart Future Labs
      </div> */}
    </footer>
  </div>
}

export default Footer