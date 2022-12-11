import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Text from "../components/Text"
import MainInfoGraphic from "../components/MainInfoGraphic"

const First = props => {
  return <div className="section-container">
    <section className="grid">
        <div>
          <Title>Setting New Standards For DEFI Risk Management</Title>
          <Subtitle>A community of risk-aware DeFi players building open protocols for risk mitigation and assessment, governed by the BPRO token.</Subtitle>
          <Text>B.Protocol has been home for risk-aware DeFi contributors since 2020. From its novel Backstop AMM protocol (with over $300m TVL in its peak) that helps lending platforms mitigate risk and increase capital efficiency, through launching RiskDAO to educate and develop open-source frameworks and dashboards to manage risk across DeFi, up to the recent Risk Oracle - Pythia.</Text>
          <div style={{margin: 'var(--spacing) 0'}}>
            <a style={{marginRight: 'var(--spacing)', marginBottom: 'var(--spacing)'}} href="#" role="button">Deposit into a Backstop pool</a>
            <a href="#" role="button" className="outline">Read The Docs</a>
          </div>
        </div>
        <MainInfoGraphic/>
    </section>
  </div>
}

export default First