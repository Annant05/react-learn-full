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

const user = {
    name: 'Annant Gupta',
    age: 24,
    location: 'Indore',
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location} </p>;
    }
    // return undefined is valid in JSX and nothing will show in html
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, appRoot);

