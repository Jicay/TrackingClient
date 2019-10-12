import {fetchCurrentPage} from "../../redux/action";
import connect from "react-redux/es/connect/connect";
import ImageForm from "../views/ImageForm";
import Congrats from "../views/Congrats";

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(fetchCurrentPage('congrats'))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Congrats)