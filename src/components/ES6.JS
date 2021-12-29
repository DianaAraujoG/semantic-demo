
// --------------------------------------- Arrow function
const data = [{...}, {...}, {...}, ...];
data.forEach(function(elem){
    // Tratamos el elemento
    console.log(elem)
});

//ES6
const data = [{...}, {...}, {...}, ...];
data.forEach(elem => {
    console.log(elem);
});

// --------------------------------------- Clases
class LibroTecnico extends Libro {
    constructor(tematica, paginas) {
      super(tematica, paginas);
      this.capitulos = [];
      this.precio = "";
      // ...
    }
    metodo() {
      // ...
    }
  }

 // --------------------------------------- This
 //ES3
var obj = {
    foo : function() {...},
    bar : function() {
        var that = this;
        document.addEventListener("click", function(e) {
            that.foo();
        });
    }
}
//ES5
var obj = {
    foo : function() {...},
    bar : function() {
        document.addEventListener("click", function(e) {
            this.foo();
        }.bind(this));
    }
} 
