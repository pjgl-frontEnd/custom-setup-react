import '@testing-library/jest-dom';
import {getSaludo} from '../base-test/02-template-string';

describe('Test in in 02-Template-string', () => {
  test('getSaludo debe retornar un hola Fernando', () => {
    const nombre = 'Fernando';
    const saludo = getSaludo(nombre);

    console.log(saludo);
    expect( saludo ).toBe(`Hola ${nombre}`)
  })


})
