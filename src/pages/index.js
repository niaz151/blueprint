import { Header } from '../components/header';
import List from '../components/List.js';

const Homepage = () => (
  <div>
    <Header />
    <div className='flex justify-center'>
      Content
      <List field="status" value="online" />
    </div>
  </div>
)

export default Homepage;
