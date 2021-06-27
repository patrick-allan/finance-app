import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Container from '../shared/template/Container';
import Header from '../shared/template/Header';
import Toolbar from '../shared/template/Toolbar';
import SideNav from '../shared/template/SideNav';
import TopNav from '../shared/template/TopNav';
import Footer from '../shared/template/Footer';
import Nav from '../shared/template/Nav';
import Routes from './Routes';
import Row from '../shared/layout/Row';

const App = props => {
    return (
        <Container>
            <Header>
                <h1>My Finances</h1>
            </Header>
            <Toolbar>
                <span>toolbar</span>
            </Toolbar>
            <Router>
                <SideNav>
                    <Nav></Nav>
                </SideNav>
                <TopNav>
                    <Nav></Nav>
                </TopNav>
                <Routes></Routes>
            </Router>
            <Footer>
                <Row xright>
                    <span>2021 - Patrick Allan</span>
                </Row>
            </Footer>
        </Container>
    )
}

export default App;