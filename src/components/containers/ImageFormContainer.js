import {fetchCurrentPage} from "../../redux/action";
import connect from "react-redux/es/connect/connect";
import ImageForm from "../views/ImageForm";

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch)  => {
    return {
        onLoad: () => dispatch(fetchCurrentPage('image'))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageForm)