Los componentes no funcionales no manejan estado, solo manejan información y funciones.

Los componentes de clases manejan un estado interno, información y funciones, no hace falta definir las funciones con const simplemente con el nombre de la función ya lo detecta.

Si empiezan con const son stateless o componentes funcionales.
Los componentes de clase se declaran como
class App extends Component {}
y en lugar de return () va render()

Redux es un contenedor predecible del estado de aplicaciones JavaScript. Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar.


Los cuatro pilares de Redux son:

Store: Almacenamiento
Reducers: Estados
Action Creators: Funciones
Componente: Código JSX

    El store tiene las siguientes responsabilidades:

    Contiene el estado de la aplicación
    Permite el acceso al estado vía getState()
    Permite que el estado sea actualizado vía dispatch(action)
    Registra los listeners vía subscribe(listener)
    Maneja la anuliación del registro de los listeners via el retorno de la función de subscribe(listener)


    Reducers:
    Las Action Creators describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

    El Provider es el componente de Redux en el cual encerraremos nuestra   aplicación para que puedan comunicarse los componentes entre ellos.

