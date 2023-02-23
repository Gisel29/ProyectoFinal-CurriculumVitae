function Confirmar(){
    var retVal = confirm("¿Seguro desea continuar?");
    if( retVal == true ){
        document.write ("OK, REGISTRO ALMACENADO");
        return true;
    }else{
        document.write ("NO SE GUARDÓ EL REGISTRO");
        return false;
    }
}