function ListItem(props){
    const items = props.items;

    return(
        <>
            <h1>{props.title}</h1>
            {items.map((item)=>(
                <div style={{border: '2px solid black'}} key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <button onClick={() => props.deleteItem(item.id)}>delete</button>
                </div>
            ))}
        </>
    );
}

export default ListItem