import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/Counter-App";

describe('Pruebas en counter app',()=>{
    const value=100;

    test('Validar la similitud con screenshot ',()=>{
        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
    });


    test('Validar el mostrar el valor inicial',()=>{
        render(<CounterApp value={value}/>);
        expect(screen.getByText('100')).toBeTruthy();
    });

    test('Debe de incrementar al hacer click en el botton +',()=>{
        render(<CounterApp value={value}></CounterApp>);
        fireEvent.click(screen.getByText('ADD +'))
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe de decrementar al hacer click en el botton -',()=>{
        render(<CounterApp value={value}></CounterApp>);
        fireEvent.click(screen.getByText('SUBTRACT -'))
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Debe de funcionar reset',()=>{
        render( <CounterApp value={value}/>);
        fireEvent.click(screen.getByText('ADD +'));
        fireEvent.click(screen.getByText('ADD +'));
        fireEvent.click(screen.getByText('ADD +'));
        //llamar por rol
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        // fireEvent.click(screen.getByText('RESET °'));
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByText('100')).toBeTruthy();
    });
})