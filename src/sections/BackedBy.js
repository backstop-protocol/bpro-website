
const BackedBy = props => {
  return <div className="withOverflowingBackground-white">
    <section  className="backed-by">
      <div className="backed-by-title">
        Backed By
      </div>
      <div className="backed-by-main">
        <div className="backed-by-img-container">
          <img className="backed-by-img" src="images/backed/1kx.png" />
          <a className="secondary" href="">1kx</a>
        </div>        
        <div className="backed-by-img-container">
          <img className="backed-by-img" src="images/backed/spartan.jpg" />
          <a className="secondary" href="">spartan</a>
        </div>        
        <div className="backed-by-img-container">
          <img className="backed-by-img" src="images/backed/robot.png" />
          <a className="secondary" href="">Robot</a>
        </div>        
        <div className="backed-by-img-container">
          <img className="backed-by-img" src="images/backed/primitive.avif" />
          <a className="secondary" href="">Primitive</a>
        </div>        
        <div className="backed-by-img-container">
          <img className="backed-by-img" src="images/backed/angleDao.png" />
          <a className="secondary" href="">AngleDao</a>
        </div>        
        <div className="backed-by-img-container">
          <img className="backed-by-img" src="images/backed/bankless.jpeg" />
          <a className="secondary" href="">founder of Bankless</a>
        </div>
      </div>
    </section>
  </div>
}

export default BackedBy