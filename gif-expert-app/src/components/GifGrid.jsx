import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from '../components';


export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log(images,isLoading)


    return (
        <>
            <h3>{ category }</h3>
            
            {
                isLoading
                ? ( <h2> Cargando... </h2> )
                : null 
            }

            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            title={ image.title }
                            url= { image.url }/>
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}
