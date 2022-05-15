import React from "react";
import { Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import MostRecent from './Pages/MostRecent';
import Admin from './Pages/Admin';
import ViewBlog from './Components/ViewBlog';

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/MostRecent' component={MostRecent} />
            <Route exact path='/Admin' component={Admin} />
            <Route exact path='/ViewBlog/:id' component={ViewBlog} />
        </Layout>
    )
}
export default App;