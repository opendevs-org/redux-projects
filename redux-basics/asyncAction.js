const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

const FETCH_POSTS = 'FETCH_POSTS'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

const fetchPostRequest = () => {
    return {
        type: FETCH_POSTS
    }
}

const fetchPostRequestSuccess = data => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: data
    }
}

const fetchPostRequestFailure = error => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

const fetchPosts = () => {
    return function (dispatch) {
        dispatch(fetchPostRequest);
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.map(post => post.title)
                dispatch(fetchPostRequestSuccess(posts))
            })
            .catch(error => {
                dispatch(fetchPostRequestFailure(error.message))
            })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchPosts())