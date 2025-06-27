import ListItem from './ListItem.jsx';
import { useState } from 'react';

function Menu(){

    const [items,setItem] = useState([
        {name:'item 1', price:3.00, quantity:12, id:1},
        {name:'item 2', price:123.00, quantity:1,id:2},
        {name:'item 3', price:213.00, quantity:10,id:3},
        {name:'item 4', price:5.00, quantity:21,id:4},
        {name:'item 5', price:6.00, quantity:0,id:5},
    ]);

    const deleteItem = (id) =>{
        setItem(items.filter(item => item.id != id));
    };

    return(
        <>
            <ListItem items={items} title="All item" deleteItem={deleteItem}/>
            
            {/* <ListItem items={items.filter((x=>x.price >=10.00))} title="All item"/> */}
        </>
    );
}

export default Menu