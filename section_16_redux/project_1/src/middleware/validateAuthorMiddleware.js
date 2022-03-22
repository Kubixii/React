import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware = () => store => next => action => {
    console.log(action);

    next(action)
}