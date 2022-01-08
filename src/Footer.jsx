import React from 'react'
import logo from '../src/Img/33.png'
export default function Footer() {
    return (
        <div className="jumbotron jum2">

            <div className="row">
                <div className="col-md-4">
                <img src={logo} />;
<p style={{color:"rgb(161, 161, 161)"}}>Copyright © 2021 Facebook Inc.</p>
                </div>

                <div className="col-md-4">
                    <h6 className=" hed4">DOCS</h6>
                    <li className="link" >Installation</li>
                    <li className="link" >Main Concepts</li>
                    <li className="link" >Advanced Guides</li>
                    <li className="link" >API Reference</li>
                    <li className="link" >Hooks</li>
                    <li className="link" >Testing</li>
                    <li className="link" >Contributing</li>
                    <li className="link" >FAQ</li >
                </div>

                <div className="col-md-4">
                    <h6 className=" hed4">CHANNELS</h6>
                    <li className="link">GitHub</li>
                    <li className="link">Stack Overflow</li>
                    <li className="link">Discussion Forums</li>
                    <li className="link">Reactiflux Chat</li>
                    <li className="link">DEV Community</li>
                    <li className="link">Facebook</li>
                    <li className="link">Twitter</li>

                </div>

                <div className="col-md-4">
                </div>

                <div className="col-md-4 mt-5">
                    <h6 className=" hed4">COMMUNITY</h6>
                    <li className="link">Code of Conduct</li>
                    <li className="link">Community Resources</li>
                </div>


                <div className="col-md-4 mt-5">
                    <h6 className=" hed4">MORE</h6>
                    <li className="link"> Tutorial</li>
                    <li className="link">Blog</li>
                    <li className="link">Acknowledgements</li>
                    <li className="link">React Native</li>
                    <li className="link">Privacy</li>
                    <li className="link">Terms</li>

                </div>
            </div>

        </div>

    )
}
