import  { ContextMovieCard } from '../components/ContextMovieCard';
import { Search } from '../components/Search.jsx';
import { useDebounce } from '../hooks/useDebounce';
import useQuery from '../hooks/useQuery';

function LandinPage() {

  const query = useQuery();
  const search = query.get("search")
  const debounceSearch = useDebounce(search, 300);

  return (
    <div>
      <Search/>
      <ContextMovieCard key={debounceSearch} search={debounceSearch}/>
    </div>
  )
}

export default LandinPage
