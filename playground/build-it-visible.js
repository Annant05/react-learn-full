const appRoot = document.getElementById('app');

let isParaVisible = false;

const toggleVisibility = () => {
    isParaVisible = !isParaVisible;
    console.log(isParaVisible)
    renderIt();
};

const renderIt = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{!isParaVisible ? 'Show Details' : 'Hide Details'}</button>
            {isParaVisible && (
                <div>
                    <p>Hi, How are you? </p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIt();