function receivesAFunction(callback){
    callback();
}
function call(){
    return function hello(){};
}
function returnsANamedFunction(){
    return call();
}
function returnsAnAnonymousFunction(){
    return (function (){});
}
