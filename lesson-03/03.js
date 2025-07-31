// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(x,y,z) {
    if(x>=y  && x>=z){
        return x;
    }else if(y>=x && y>=z){
        return y;
    }
    return z;
}

