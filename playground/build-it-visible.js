const appRoot = document.getElementById('app');

let isParaVisible = false;

const onToggle = () => {
    isParaVisible = !isParaVisible;
    console.log(isParaVisible)
    renderIt();
};
const setParaVisibility = () => {
    if (isParaVisible) {
        return <p>Hi, How are you?</p>
    }
};

const renderIt = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>Show Details</button>
            {setParaVisibility()}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIt();