   function eliminar_espacios(texto)
   {
     var textoSinEspacios ="";//GUARDA EL NUEVO TEXTO SIN ESPACIOS
     for(i=0;i<texto.length;i++)//RECORE LAS LETRAS Y CAMBIA LOS ESPACIOS POR NADA 
     {
       if(texto[i]!==" ")//ENCUENTRAS LOS ESPACIOS Y LOS ELIMINA 
       {
         textoSinEspacios +=texto[i]//CONCATENAMOS ES TEXTO CON EL ANTERIOR 
       }
     }
     return textoSinEspacios ;//RETORNAMOS EL TEXTO
   }
