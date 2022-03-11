import { Header } from '../components/header';
import List from '../components/List.js';

const Homepage = () => (
  <div>
    <Header />
    <div className='flex justify-center align-center h-screen border-2 overflow-scroll'>
      <List field="status" value="online" />
    </div>
  </div>
)

export default Homepage;
