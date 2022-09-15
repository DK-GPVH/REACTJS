import {render,screen} from '@testing-library/react';
import {FirstApp} from '../../src/components/FirstApp';

describe('Pruebas en firstApp mas optimizada',()=>{
    const title="Titulo de prueba";
    const subtitle = "Subtitulo de prueba";
    test('DEbe hacer match con el snapshot',()=>{
        const {container} =render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot(); 
    });

    test('Debe mostrarr el mensaje',()=>{
        render(<FirstApp title={title}/>);
        // screen.debug()
        //uso del screen
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe mostrar el titulo en un h1',()=>{
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo enviado por props',()=>{
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect(screen.getAllByText(subtitle).length).toBe(1);
    });
});