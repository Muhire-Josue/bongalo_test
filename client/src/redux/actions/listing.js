import { async } from "regenerator-runtime";

import dotenv from 'dotenv';
import { SUBMIT_LISTING_SUCCESS, SUBMIT_LISTING_ERROR } from '../../constants/action-types/submitListing';
dotenv.config();


export const saveListing = listing => async dispatch => {

    try {
        const body = JSON.stringify(listing);
        const res = await fetch(`${process.env.API_URL}/api/accommodation`, body);
        
        dispatch({
            type: SUBMIT_LISTING_SUCCESS,
            payload: res.data
        })
        
    } catch (error) {
        
    }
}