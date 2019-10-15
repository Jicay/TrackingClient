import {fetchCurrentPage} from "../../redux/action";
import { connect } from "react-redux";
import Home from "../views/Home";

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(fetchCurrentPage('home'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)