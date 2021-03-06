import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import App from '../components/component';

import * as Actions from '../actions/action';

let mapStateToProps = state => {
  return state.reducer;
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
