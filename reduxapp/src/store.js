import rootreducer from './reducer/index';
import { legacy_createStore as createStore} from 'redux'
const store=createStore(rootreducer,window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_());
export default store;