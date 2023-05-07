import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            if(response.status == 200)
                setResponse(response);
            else 
                setError(true);
        } catch (err) {
            setError(true);
        }
        
        setLoading(false);
    }

    return [response, error, loading, makeRequest];
}

export default usePost;