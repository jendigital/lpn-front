import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/auth_reducer';
import userReducer from './user/user_reducer';
import communicationReducer from './com/communication_reducer';
import customerReducer from './customer/customer_reducer';

const appReducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    communication: communicationReducer,
    customer: customerReducer,
});

export default appReducers;
