import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>
          This project is inteaded to be a practical demonstration of my skills using React!
        </p>
        <p>
          <Link to='/'>Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;