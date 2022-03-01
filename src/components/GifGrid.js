import React, {useEffect, useState} from 'react';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=NFmvEDyd0WMPStwnG0PZTbDGVSk2BQJL';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs );

    }


    return (
        <div>
            <h3> { category } </h3>
            <ol>
                {
                    images.map( ({ id, title }) => (
                        <li key={ id }> { title } </li>
                    ))
                }
            </ol>
        </div>
    );
}
