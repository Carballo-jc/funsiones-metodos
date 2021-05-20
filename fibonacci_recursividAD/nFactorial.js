function factorial(x){
    if(x > -1 && x < 2)return 1;
    else if(x < 0) return 0;
    return x * factorial(x -1)
    
}

