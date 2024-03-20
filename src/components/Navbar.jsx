const Navbar = ({logged}) => {
    return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <a className="navbar-brand" href="/">E-commerce</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/real">Real</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/products/form">Form</a>
                </li>
                {!logged && (
                    <>
                        <li className="nav-item">
                            <a className="nav-link" href="/auth/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/auth/login">Login</a>
                        </li>
                    </>
                )}
                {logged && (
                    <li className="nav-item">
                        <a className="nav-link" id="signout" href="/auth/signout">Signout</a>
                    </li>
                )}

            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar