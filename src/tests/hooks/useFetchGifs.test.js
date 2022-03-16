import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";


describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs(' One Punch' ) );
        const { data, loading } = result.current;
        //const { data, loading } = useFetchGifs( category );
        //console.log( data, loading );
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

})
