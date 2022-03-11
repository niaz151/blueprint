import { Header } from '../components/header';
import List from '../components/List.js';
import SearchBar from '../components/SearchBar';

const Homepage = () => (
  <div>
    <Header />
    <div className='flex flex-col align-center h-screen overflow-scroll'>
      <SearchBar/>
      <List field="status" value="online" />
    </div>
  </div>
)

export default Homepage;
