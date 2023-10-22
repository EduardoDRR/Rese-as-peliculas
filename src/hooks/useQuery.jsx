import { useLocation } from 'react-router';

export function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default useQuery;