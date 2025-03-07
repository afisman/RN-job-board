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

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            // const response = await axios.request("./../data/data.json");
            if (endpoint === 'search') {
                setData(response.data.data);
            } else if (endpoint === 'job-details') {
                const job = response.data.data.filter(el => {
                    return el.job_id === query.job_id
                });
                setData(job);
            }

            setIsLoading(false)
        } catch (error) {
            setError(error);
            alert('There is an error');

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;