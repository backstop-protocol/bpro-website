import React, { useState } from 'react';

const linkStyle = {
  margin: '0 var(--spacing)',
  fontWeight: 400,
  fontSize: '18px',
  align: 'center',
  lineHeight: '22px',
  textDecoration: 'none'
}

const MobileHeader = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {darkMode} = window
  const iconStyle = {
    filter: `invert(${window.darkMode ? 1 : 0})`,
    margin: '0 10px',
  }
  return <div>
    <nav>
      <ul>
        <li style={{padding: '25px 0'}}><img style={{height: '26px'}} src={`/full-logo${darkMode ? '-dark' : ''}.svg`}/></li>
      </ul>
      <ul>
        <li onClick={()=> setMenuOpen(!menuOpen)} style={{padding: '25px 0'}}><a><img style={{height: '14px'}} src={`/menu${darkMode ? '-dark' : ''}.svg`}/></a></li>
      </ul>
    </nav>
    <div className="mobile-menu" style={{height: menuOpen ? '340px' : '0px'}}>
      <div style={{padding: '20px'}}>
        <div className="item"><a style={linkStyle} className="contrast" href="#">Home</a></div>
        <div className="item"><a style={linkStyle}  className="contrast" href="https://docs.bprotocol.org/">Docs</a></div>
        <div className="item" style={{marginRight: 'var(--spacing)'}}><a style={linkStyle}  className="contrast" href="https://dashboard.bprotocol.org/">Dashboard</a></div>
        <div  className="item">
          <a href="https://twitter.com/bprotocoleth"><img style={iconStyle} src="images/social/twitter.svg"/></a>
          <a href="https://discord.com/invite/bJ4guuw"><img style={iconStyle} src="images/social/discord.svg"/></a>
          <a href="https://github.com/backstop-protocol"><img style={iconStyle} src="images/social/github-icon.svg"/></a>
          <a href="https://medium.com/b-protocol"><img style={iconStyle} src="images/social/medium.svg"/></a>
          <a href="https://forum.bprotocol.org/"><img style={iconStyle} src="images/social/cw.svg"/></a>
        </div>
        <div className="item "><a style={{width: '90px', fontSize: '16px', padding: 'padding: 8px 27px'}} href="https://app.bprotocol.org" role="button">App</a></div>
      </div>
    </div>
  </div>
}

export default MobileHeader