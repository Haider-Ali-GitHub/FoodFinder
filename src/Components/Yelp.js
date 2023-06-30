// (Cynthia) IMPORTANT: please look at all the comments I made under parameters we 
// might run into some issues because of categories (maybe) and dining options.
// price and radius need to be altered to adjust to the API's requirements.
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *

import React, { useState } from "react";
import yelp from 'yelp-fusion';
import '../App.js';
import {
    location,
    distance,
    priceRange,
    cuisineCategory,
    cuisineSelection,
    diningOption,
  } from '../App.js';



function Yelp({}) {
    const [restaurants, setRestaurant] = useState([]);    
    useEffect(() => {
        const apiKey = 'unUR-EpzUzyzgtVWYtHth_R_SOSmj2-x4vm8eTwYEDoafnn2SAUXWM_J63BqkzYtK0-OveUOexmIs00OuE2J59QXLIMmAZa3NrfVfcs5nLP0yrtZRQcl85XnROedZHYx';
        const client = yelp.client(apiKey);
        const params = {
            term: 'restaurant',
            location: location,
            categories: cuisineCategory, cuisineSelection,
            radius: distance, //needs to be converted to meters
            price: priceRange, //needs to be converted to numbers ($ = 1,$$ = 2)
            open_now: true, //maybe add as an option to our questions?
            limit: 20, //store limit, going to change, temporary for now
            attributes: diningOption,   //API does not provide a specific parameter 
                                        //for filtering restaurants based on the availability 
                                        //of drive-thru service

        };

        client.search(params)
            .then(response =>{
                const { businesses } = response.jsonBody;
                setRestaurants(businesses); 
            })
            .catch(error => {
                console.error(error);
            })
    }, [])


    return (
        null
);
}
export default Yelp;