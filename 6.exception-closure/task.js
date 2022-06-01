function parseCount (arg){
    let argument = Number.parseInt(arg);
    if (Number.isNaN(argument)) {
        throw  new Error("Не валидное значение")  
       }
     else  return argument
}


function validateCount (arg){
     try{
       return parseCount (arg)  
     }
     catch (e) {
        return e
     }
    
 }

console.log(validateCount(777)) 

class Triangle {
    constructor (a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c) {
         throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
   
    }
    getArea () {
        let p = this.getPerimeter()/2
        let S = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))

    return S.toFixed(3);
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a,b,c);
    } catch  {
        return  {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}

console.log( getTriangle (1,1,4))

