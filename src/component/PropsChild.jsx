function PropsChild(props){
    return(
        <>
            <div>
                <h2>Hello, {props.name}!</h2>
                <p>Age: {props.age}</p>
            </div>
        </>
    );
}

export default PropsChild