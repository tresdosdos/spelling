import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.scss';

const Home: React.FC = () => (
  <main className={'s-home'}>
    <h1 className={'s-home-label'}>Practise your English skills playing the game</h1>
    <Button variant={'light'}><Link to={'/learn'}>Play now</Link></Button>
  </main>
);

export default Home;
