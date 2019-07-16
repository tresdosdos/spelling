import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import Spinner from 'containers/Spinner';
import './styles.scss';

const DefaultLayout: React.FC = (props) => {
  return (
    <div className={'s-layout'}>
        <Navbar bg={'dark'} variant={'dark'} className={'s-navbar'}>
            <Navbar.Brand>Spelling</Navbar.Brand>
            <Nav className={'mr-auto s-nav'}>
                <Link className={'nav-link'} to={'/'}>Home</Link>
                <Link className={'nav-link'} to={'/learn'}>Learn</Link>
                <Link className={'nav-link'} to={'/profile'}>Profile</Link>
            </Nav>
        </Navbar>
      <div className={'s-layout-content'}>{props.children}</div>
      <Spinner/>
    </div>);
};

export default DefaultLayout;
