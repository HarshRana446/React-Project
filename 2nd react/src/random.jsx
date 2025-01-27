function Random() {

    let number = Math.random() * 100;
    
    return <h3 style={{'backgroundColor': '#44ff00'}}>
        hello this is {Math.round(number)}.
        </h3>
}

export default Random;