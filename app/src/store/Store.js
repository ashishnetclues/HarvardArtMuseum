import { createStore, combineReducers } from 'redux';
import OrganizationReducer from '../reducers/OrganizationReducer';

const rootReducer = combineReducers({
  OrganizationReducer: OrganizationReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
