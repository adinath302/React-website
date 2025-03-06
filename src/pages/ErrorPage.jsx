import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops! An error occurred.</h1>

            {error && <p> {error.data}</p>} // use to show error message when there is error
            <NavLink to='/'>
                <button>
                    Go Home
                </button>
            </NavLink>
        </div>
    )
}

export default ErrorPage;