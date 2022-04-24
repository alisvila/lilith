import {authActions} from './auth'

import auth from '../api/user-api';

export const login = (userDetail : object) => {
    return  async (dispatch : any) => {
        const user = await auth.login(userDetail)
        dispatch(authActions.login(user))
    }
}