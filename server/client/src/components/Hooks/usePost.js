import axios from 'axios';
import { useState } from 'react';

function usePost({url, config}) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const makeRequest = async (data) => {
        setResponse(null);
        setError(false);
        setLoading(true);

        try {
            let response = await axios.post(url, data, config);
            if(response.status === 200)
            {
                setLoading(false);
                setResponse(response);
            }
            else 
            {
                setLoading(false);
                setError(true);
            }
        } 
        catch (err) 
        {
            setLoading(false);
            setError(true);
        }
    }

    return [response, error, loading, makeRequest];
}

export default usePost;