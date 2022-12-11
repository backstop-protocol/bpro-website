
const linkStyle = {
  margin: '0 var(--spacing)'
}

const iconStyle = {
  margin: '0 10px'
}

const Header = props => {

  return <div>
    <nav>
      <ul>
        <li><img style={{height: '39px'}} src="/full-logo.svg"/></li>
      </ul>
      <ul>
        <li><a style={linkStyle} className="contrast" href="#">Home</a></li>
        <li><a style={linkStyle}  className="contrast" href="#">Docs</a></li>
        <li style={{marginRight: 'var(--spacing)'}}><a style={linkStyle}  className="contrast" href="#">Dashboard</a></li>

        <li style={{margin: '0 var(--spacing)'}} className="">
          <a href="#"><img style={iconStyle} src="images/social/twitter.svg"/></a>
          <a href="#"><img style={iconStyle} src="images/social/discord.svg"/></a>
          <a href="#"><img style={iconStyle} src="images/social/github-icon.svg"/></a>
          <a href="#"><img style={iconStyle} src="images/social/telegram.svg"/></a>
          <a href="#"><img style={iconStyle} src="images/social/medium.svg"/></a>
        </li>
        <li><a style={{width: '86px'}} href="#" role="button">App</a></li>
      </ul>
    </nav>
  </div>
}

export default Header