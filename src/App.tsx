import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from "./screens/Main";
import ContactEditor from "./screens/ContactEditor";
import UserDescription from "./screens/ContactDetails";
import ErrorScreen from "./screens/ErrorScreen";
import ErrorBoundary from "./services/ErorrService/ErrorBoundery";
import {useSelector} from "react-redux";
import ErrorMessage from "./modules/ErrorMessage";

function App() {
    const error = useSelector((state:UsersState) => state.error)
    return (
        <ErrorBoundary>
            { !error?
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/create">
                            <ContactEditor/>
                        </Route>
                        <Route path="/edit/:id">
                            <ContactEditor/>
                        </Route>
                        <Route path="/details/:id">
                            <UserDescription/>
                        </Route>
                        <Route component={ErrorScreen}/>
                    </Switch>
                </Router>:
                <ErrorMessage/>
            }
        </ErrorBoundary>
    );
}

export default App;
