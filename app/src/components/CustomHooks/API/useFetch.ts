import { useEffect, useState } from "react"
import axios from 'axios';

export interface Item {
    userId: number | null,
    id: number,
    title: string,
    completed: boolean 
}

interface State<T> {
    loading: boolean,
    data: T[],
    error: Error | null,
    totalCount: number
}

export const useFetch = <T extends Item>(url: string, _page: number) : State<T> => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        setLoading(true);
        axios.get(url, {
            params: {
                _page,
                _limit: 9,
            }
        })
        .then(res => {
            setData(res.data);
            setTotalCount(res.headers['x-total-count'])
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [url, _page])

    return {
        loading,
        data, 
        error,
        totalCount
    }
}
