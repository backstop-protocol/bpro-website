import MobileHeader from "./MobileHeader";
const linkStyle = {
  margin: '0 var(--spacing)'
}

const Header = props => {
  const {darkMode, isMobile} = window
  const iconStyle = {
    margin: '0 10px',
    filter: `invert(${window.darkMode ? 1 : 0})`
  }

  if (isMobile) {
    return <MobileHeader/>
  }
  return <div>
    <nav>
      <ul>
        <li><img style={{height: '39px'}} src={`/full-logo${darkMode ? '-dark' : ''}.svg`}/></li>
      </ul>
      <ul>
        <li><a style={linkStyle}  className="contrast" href="https://docs.bprotocol.org/">Docs</a></li>
        <li><a style={linkStyle}  className="contrast" href="https://dashboard.bprotocol.org/">Dashboard</a></li>
        <li style={{marginRight: 'var(--spacing)'}}><a style={linkStyle} className="contrast"  href="https://forum.bprotocol.org/">Forum</a></li>

        <li style={{margin: '0 var(--spacing)'}} className="">
          <a href="https://twitter.com/bprotocoleth"><img style={iconStyle} src="images/social/twitter.svg"/></a>
          <a href="https://discord.com/invite/bJ4guuw"><img style={iconStyle} src="images/social/discord.svg"/></a>
          <a href="https://github.com/backstop-protocol"><img style={iconStyle} src="images/social/github-icon.svg"/></a>
          <a href="https://medium.com/b-protocol"><img style={iconStyle} src="images/social/medium.svg"/></a>
        </li>
        <li><a style={{width: '86px'}} href="https://app.bprotocol.org" role="button">App</a></li>
      </ul>
    </nav>
  </div>
}

export default Header