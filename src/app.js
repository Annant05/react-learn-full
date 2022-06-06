import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header </p>
//             {props.children}
//             <p>footer </p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )

// ReactDOM.render((
//     <Layout>
//         {template}
//     </Layout>
// ), document.getElementById('app'));


// // trying out new class definition type.
// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi my name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // example of new type.
// class NewSyntax {
//     name = 'Abc'
//     getGreeting = () => {
//         return `Hi my name is ${this.name}.`;
//     }
// }

// const newSyntax = new NewSyntax();
// const getGreeting2 = newSyntax.getGreeting;
// console.log(getGreeting2());