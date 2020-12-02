Los componentes no funcionales no manejan estado, solo manejan información y funciones.

Los componentes de clases manejan un estado interno, información y funciones, no hace falta definir las funciones con const simplemente con el nombre de la función ya lo detecta.

Si empiezan con const son stateless o componentes funcionales.
Los componentes de clase se declaran como
class App extends Component {}
y en lugar de return () va render()