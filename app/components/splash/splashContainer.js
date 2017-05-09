import { connect } from 'react-redux'
import Splash from './splash.jsx'

const mapStateToProps = (state) => {
  return {
      chronicle: state.chronicle || []
  }
}

const SplashContainer = connect(
  mapStateToProps
)(Splash)

export default SplashContainer
