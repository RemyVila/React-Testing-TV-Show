// import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
// import { useEffect } from 'react';
import axios from 'axios';

const fetchShow = () => {
    return axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(
      res => {
        console.log(res);
        return res;
      }    
    ) // or res.data, however you want to set that up
  };
  export default fetchShow;