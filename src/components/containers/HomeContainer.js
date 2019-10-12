import {fetchCurrentPage} from "../../redux/action";
import connect from "react-redux/es/connect/connect";
import Home from "../views/Home";
import {withSizes} from "react-sizes";
import {compose} from "recompose";

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch)  => {
    return {
        onLoad: () => dispatch(fetchCurrentPage('home'))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Home)