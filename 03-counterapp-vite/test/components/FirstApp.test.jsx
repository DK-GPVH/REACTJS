import {render} from '@testing-library/react';
import {FirstApp} from '../../src/components/FirstApp';

describe('Pruebas en firstApp',()=>{
    // test('debe hacer match con el sanpshot', () => { 
    //     const title = "Hola como estas";
    //     const {container}= render(<FirstApp title={title}/>)
    //     //verificar la similitud con el componente
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un h1',()=>{
        const title = "Hola como estas";
        const {container, getByText , getByTestId}= render(<FirstApp title={title}/>)
        //verificar la existencia del texto
        expect(getByText(title)).toBeTruthy();
        //verificar la similitud con el h1
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('debe de mostrar subtitulo',()=>{
        const subTitle = "Hola subtitulo";
        const {getAllByText }= render(<FirstApp  title="Hola" subtitle={subTitle}/>);
        
        expect(getAllByText(subTitle).length).toBe(1);

        //verificar varios elementos

    });

})