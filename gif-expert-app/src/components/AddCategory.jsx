import PropTypes from 'prop-types';
import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChanged = ( { target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

    return(
        <form action="POST" onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // Si solo referenciamos a la funcion se pasa el evento por default.
                // (e) => onInputChanged(e) 
                onChange={ onInputChanged }
            />
        </form>
    )

}

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired,
}
