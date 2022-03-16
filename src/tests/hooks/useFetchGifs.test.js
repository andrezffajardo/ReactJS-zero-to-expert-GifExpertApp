import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";


describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(' One Punch' ) );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        //const { data, loading } = useFetchGifs( category );
        //console.log( data, loading );
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('Debe retornar un array de imgs y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(' One Punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });

})
