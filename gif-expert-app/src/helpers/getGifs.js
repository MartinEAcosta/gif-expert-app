export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=tG8jBohM3BppPfGrISp1OiAfpz2pe7dx&q=${ category }&limit=10`;
    const res = await fetch( url );
    const { data } = await res.json();

    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}