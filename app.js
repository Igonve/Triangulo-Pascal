

let numeroFilas = 5

var generate = function(numeroFilas) {
    let triangle = [[1], [1,1]]
    
    if(numeroFilas === 0){
        return []
    } else if(numeroFilas == 1){
        return [[1]]       
    } else if(numeroFilas == 2){
        return  [[1], [1,1]]
    } else {      
        for(let i = 2; i < numeroFilas; i++){       
            addFila(triangle)
        }
    }
    return triangle
    
};
var addFila = function(triangle){
    let previo = triangle[triangle.length - 1]
    let nuevaFila = [1]
    for(let i = 0; i < previo.length - 1; i++){
        let actual = previo[i]
        let next = previo[i+1] 
        nuevaFila.push(actual + next)
    }
    nuevaFila.push(1)
    return triangle.push(nuevaFila)
    
}
console.log(generate(6))