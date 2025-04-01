// import { Children } from "react"

// function customRender(reactElement, container){

//     /*
// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.children
// domElement.setAttribute('href',reactElement.props.href)
// domElement.setAttribute('target', reactElement.props.target)
//  container.appendChild(domElement)
//  */
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     for(const prop in reactElement.props){
//         if(prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop])

//     }   
//     container.appendChild(domElement)
// }


// const reactElement ={
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     Children:'Click me to visit google'
// }

// const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer);

/*
function customRender(reactElement, container) {
    if (!reactElement || !container) return;

    const domElement = document.createElement(reactElement.type);

    // Set text content safely
    if (reactElement.props?.children) {
        domElement.textContent = reactElement.props.children;
    }

    // Set attributes (excluding `children`)
    if (reactElement.props) {
        Object.entries(reactElement.props).forEach(([key, value]) => {
            if (key !== 'children') {
                domElement.setAttribute(key, value);
            }
        });
    }

    container.appendChild(domElement);
}

// Define React-like element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        children: 'Click me to visit Google'
    }
};

// Render in the main container
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);

*/

function customRender(reactElement, container) {
    if (!reactElement || !container) return;

    const domElement = document.createElement(reactElement.type);

    // Loop through properties
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            // Set text content safely
            domElement.textContent = reactElement.props[prop];
        } else {
            // Set attributes dynamically
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    container.appendChild(domElement);
}

// Define React-like element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        children: 'Click me to visit Google'
    }
};

// Render in the main container
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);

