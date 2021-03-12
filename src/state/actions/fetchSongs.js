import axios from 'axios'
import {
    FETCH_SONGS_REQUEST,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_ERROR
} from '../constants/actionTypes';

const fetchSongsRequest = () => ({
    type: FETCH_SONGS_REQUEST
});

const fetchSongsSuccess = response => ({
    type: FETCH_SONGS_SUCCESS,
    response
});

const fetchSongsError = error => ({
    type: FETCH_SONGS_ERROR,
    error
});

const fetchSongs = () => async (dispatch) => {
    dispatch(fetchSongsRequest());

    const server = process.env.NODE_ENV === "development" 
                ? 'http://localhost:9000/albums'
                : 'https://album-display-poc.netlify.app/.netlify/functions/albums'
    
    console.log();
    axios.get(server)
        .then(response => {
            dispatch(fetchSongsSuccess(response));
        })
        .catch(error => {
            dispatch(fetchSongsError(error.message));
            throw error;
        });
};

export default fetchSongs;