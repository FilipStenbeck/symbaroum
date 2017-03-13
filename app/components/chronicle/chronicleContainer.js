import { connect } from 'react-redux'
import Chonicle from './chronicle.jsx'

const mapStateToProps = (state) => {
  return {
      chronicle: state.chronicle || []
  }
}

const ChronicleContainer = connect(
  mapStateToProps
)(Chonicle)

export default ChronicleContainer
