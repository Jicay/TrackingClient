import {connect} from 'react-redux';
import SwitchComponent from "../views/SwitchComponent";
import {fetchSessionIdIfNeeded, sendMousePosition} from "../../redux/action";

const mapStateToProps = state => {
    return {
        ...state.sessionId,
        ...state.page
    }
}

const mapDispatchToProps = (dispatch)  => {
    return {
        onLoad: () => dispatch(fetchSessionIdIfNeeded()),
        sendMousePosition: (x, y, page, sessionId) => dispatch(sendMousePosition(x, y, page, sessionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchComponent)