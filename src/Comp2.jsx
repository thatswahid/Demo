import React, {useState} from 'react'
import Comp from './Comp';
import web from '../src/Img/4 (2).png'
import web1 from '../src/Img/3 (2).png'
import web2 from '../src/Img/2 (2).png'
import web3 from '../src/Img/1 (2).png'

export default function Wrappar() {  
 
let [state, setstate] = useState({
    heading:"A Simple Component",
    text: "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
    image:web
})

let [stateOne, setstateOne] = useState({
    heading:"A Stateful Component",
    text: "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
    image:web1
})

let [stateTwo, setstateTwo] = useState({
    heading:"An Application",
    text: "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
    image:web2
})


let [stateThree, setstateThree] = useState({
    heading:"A Component Using External Plugins",
    text: "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.",
    image:web3
})



    return (
        <div>
            <Comp heading={state.heading} text={state.text} image={state.image}/>
            <Comp heading={stateOne.heading} text={stateOne.text} image={stateOne.image}/>
            <Comp heading={stateTwo.heading} text={stateTwo.text} image={stateTwo.image}/>
            <Comp heading={stateThree.heading} text={stateThree.text} image={stateThree.image}/>
        </div>
    )
}
