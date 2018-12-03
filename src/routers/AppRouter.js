import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import AddExpenseDashboard from '../components/AddExpenseDashboard';
import NotFoundPage from '../components/NotFoundPage';
import EditExpenseDashboard from '../components/EditExpenseDashboard';
import ExpenseDashboard from '../components/ExpenseDashboard';
import HelpPage from '../components/HelpPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route exact path="/" component={ExpenseDashboard} />
                <Route exact path="/create" component={AddExpenseDashboard} />
                <Route exact path="/edit/:id" component={EditExpenseDashboard} />
                <Route exact path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;