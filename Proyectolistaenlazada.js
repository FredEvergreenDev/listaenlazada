// Clase Nodo para crear los elementos de la lista
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  // Clase ListaEnlazada para manejar los nodos
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    // Método para insertar un valor al final de la lista, evitando duplicados
    insertarAlFinal(valor) {
      // Verificar si el valor ya existe en la lista
      if (this.contiene(valor)) {
        console.log(`El valor ${valor} ya está en la lista.`);
        return;
      }
  
      const nuevoNodo = new Nodo(valor);
  
      // Si la lista está vacía, el nuevo nodo será la cabeza
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
      } else {
        let actual = this.cabeza;
        // Recorrer hasta el último nodo
        while (actual.siguiente !== null) {
          actual = actual.siguiente;
        }
        // Insertar el nuevo nodo al final
        actual.siguiente = nuevoNodo;
      }
    }
  
    // Método para verificar si un valor ya está en la lista
    contiene(valor) {
      let actual = this.cabeza;
      while (actual !== null) {
        if (actual.valor === valor) {
          return true;
        }
        actual = actual.siguiente;
      }
      return false;
    }
  
    // Método para mostrar todos los valores que superen un valor determinado
    mostrarMayoresQue(umbral) {
      let actual = this.cabeza;
      const valoresMayores = [];
      
      while (actual !== null) {
        if (actual.valor > umbral) {
          valoresMayores.push(actual.valor);
        }
        actual = actual.siguiente;
      }
  
      console.log(`Valores mayores que ${umbral}:`, valoresMayores.length > 0 ? valoresMayores : "No hay valores mayores");
    }
  
    // Método para mostrar toda la lista
    mostrarLista() {
      let actual = this.cabeza;
      const valores = [];
  
      while (actual !== null) {
        valores.push(actual.valor);
        actual = actual.siguiente;
      }
  
      console.log('Lista completa:', valores.length > 0 ? valores : "La lista está vacía");
    }
  }
  
  // Crear una lista enlazada de números enteros positivos al azar
  function generarListaAzar(tamano, maxValor) {
    const lista = new ListaEnlazada();
    for (let i = 0; i < tamano; i++) {
      const numeroAleatorio = Math.floor(Math.random() * maxValor) + 1; // Número entre 1 y maxValor
      lista.insertarAlFinal(numeroAleatorio);
    }
    return lista;
  }
  
  // Uso del programa
  const lista = generarListaAzar(10, 100); // Crear una lista con 10 números aleatorios entre 1 y 100
  lista.mostrarLista();
  lista.mostrarMayoresQue(50); // Mostrar los nodos con valores mayores a 50
  