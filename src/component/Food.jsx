import { useEffect } from "react";

function Food(){

    const food = ["nasi lemak","burger","test"];

    return (
        <div>
            {food.length === 0 ? (
                <p>No items to display</p> 
            ) : 
            (
                <ul>
                    {food.map((item, index) => (
                        <li key={index}>{item.toUpperCase()}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Food