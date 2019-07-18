function mostrar()
{
//tomo la edad  
var mes; 
mes=document.getElementById('mes').value;
    switch(mes)
    {
        case ("Febrero"):
        alert("si tiene 28 días" );
        break;
        case ("Abril"):
        case ("Junio"):
        case ("Septiembre"):
        case ("Noviembre"):
        alert("si tiene 30 días");
        break;
        default:
        alert("si tiene 31 días");
        break;



    }
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN