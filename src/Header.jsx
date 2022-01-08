import React from "react"

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" className="img" />
                <a className="navbar-brand" href="#"><b>React</b></a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Docs </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tutorial</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Community</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
