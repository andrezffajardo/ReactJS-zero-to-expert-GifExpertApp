import React from 'react';
import {GifGridItem} from "../../components/GifGridItem";
import { shallow } from 'enzyme';


describe('Pruebas en <GifGridItem />', () => {

    const title = 'A Title';
    const url = 'https://localhost/any.jpg'
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> )

    test('Debe mostrar <GifGridItem /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el Title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        //console.log(img.prop('src'))
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Debe tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        //console.log(div.prop('className'))
        expect( className.includes('animate__fadeIn') ).toBe( true );

    });



})
