import { connect } from 'react-redux';
import Search from './search';
import { findUsers } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return{}
};

const mapDispatchToProps = dispatch => {
    return{
        findUsers: (search)=>dispatch(findUsers(search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);