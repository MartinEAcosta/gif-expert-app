import { useState } from "react";
import { AddCategory } from "../components/AddCategory";

export const GifExpertApp = () => {

    // Los hooks son posicionales.
    const [ categories, setCategories ] = useState([ 'One Punch' , 'Drogon Ball' ]);

    const onAddCategory = ( name ) => {

        if( name != undefined ){

            setCategories( [ ...categories, name ] );

        }
    }

    return (
        <>
            {/* titulo  */}

            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories= { setCategories } />
            {/* Listado de Cards (items o gif) */}
            <ol>
                {
                    categories.map( category  => {

                        return ( 
                            <li key={ category }> { category }</li>
                        )

                    })
                }
            </ol>
                {/* Gif item */}

                
        </>
    );

}