import React from 'react';
import { shallow } from 'enzyme';
import {AddCategory} from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de cambiar caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hi World';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim()).toBe( value );

    });

    test('No debe postear informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })

})
