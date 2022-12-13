const styles = {
  title: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '134.02%',
    textAlign: 'center',
    color: '#393939',
  },
  backed: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'var(--spacing)'
  },
  img: {
    maxHeight: '100px',
    margin: 'var(--spacing)',
  }
}

const Partners = props => {
  return <div className="withOverflowingBackground-white">
    <section  style={{height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: 0}}>
      <div style={styles.title}>
        Backed By
      </div>
      <div style={styles.backed}>
        <img style={styles.img} src="images/backed/1kx.png" />
        <img style={styles.img} src="images/backed/spartan.jpg" />
        <img style={styles.img} src="images/backed/robot.png" />
        <img style={styles.img} src="images/backed/primitive.avif" />
        <img style={styles.img} src="images/backed/angleDao.png" />
        <img style={styles.img} src="images/backed/bankless.jpeg" />
      </div>
    </section>
  </div>
}

export default Partners