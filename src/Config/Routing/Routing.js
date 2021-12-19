import React from 'react'
import Request from '../../Pages/Request Page'
import Login from '../../Pages/Login Page/index'
import SeeAll from '../../Pages/See all request/index'
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

const Routing = () => {
    return (
        <Router>
            <div>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav> */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/request" element={<Request />} />
                    <Route path="/seeAll" element={<SeeAll />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Routing
