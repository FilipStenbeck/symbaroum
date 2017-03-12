import { connect } from 'react-redux'
import Npc from './npc.jsx'

const mapStateToProps = (state) => {
  return {
      npc: state.npc || []
  }
}

const NpcContainer = connect(
  mapStateToProps
)(Npc)

export default NpcContainer
