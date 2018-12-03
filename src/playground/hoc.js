// heigher order component (HOC) A component (HOC) that renders another component.
// Reuse code
// Render  hijacking
// prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
);

const  withAdminWarning = (WrappedComponent) => {
    // the component we create right here is going to be the HOC
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {

    return (props) => (
        <div>
            {
                props.isAuthenticated ? <WrappedComponent {...props} />  : <p>Plase log in to see the info</p>
            }
        </div>
    )

}

const AuthInfo = requireAuthentication(Info);



// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));