console.log('App.js is running.');

const appRoot = document.getElementById('app');
// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length ? 'Here are your options' : 'No Options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// ReactDOM.render(template, appRoot);

let count = 0;
const addOne = () => {
    count++;
    console.log('addOne', count);
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne', count);
    renderCounterApp();
};
const reset = () => {
    count = 0
    console.log('reset', count);
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    // console.log(templateTwo);
    ReactDOM.render(templateTwo, appRoot);

}

renderCounterApp();