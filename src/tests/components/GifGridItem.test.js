import React from 'react';
import {GifGridItem} from "../../components/GifGridItem";
import { shallow } from 'enzyme';


describe('Pruebas en <GifGridItem />', () => {

    const title = 'A Title';
    const url = 'https://localhost/any.jpg'


    test('Debe mostrar <GifGridItem /> correctamente', () => {

        const wrapper = shallow( <GifGridItem title={ title } url={ url }/> )
        expect( wrapper ).toMatchSnapshot();
    });

    // test('Debe mostrar titulo enviado por props', () => {
    //
    //     const title =
    //
    // })



})
