import React from 'react'


export default function Card() {
    return (
        <div className="container con">
            <div className="row">
                <div className="col-md-4">
                <p className="hed3">Declarative</p>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p><br />
                <p>Declarative views make your code more predictable and easier to debug.</p>
                </div>

                <div className="col-md-4">
                <p className="hed3">Component-Based</p>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p><br />
                <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                </div>

                <div className="col-md-4">
                <p className="hed3">Learn Once, Write Anywhere</p>
                <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p><br />
                <p>React can also render on the server using Node and power mobile apps using React Native.</p>
                </div>
            </div>
            <hr />
        </div>
        

    )
}
