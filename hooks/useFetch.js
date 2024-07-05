import axios from "axios";
import { useEffect, useState } from "react";
import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };
}