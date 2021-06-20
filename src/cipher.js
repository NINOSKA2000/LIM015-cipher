
const cipher =
{
  encode: function (contrasena,palabra) 
  {
    //console.log(palabra);

    if(palabra==null || contrasena==0 || palabra==0 || contrasena==null)
    {
      throw new TypeError("no puede ser nulo");
    }
        
    let cifrado ="";

    for (var i = 0; i <= palabra.length; i++)
    {
      let numContrasena=Number(contrasena);
      let indice = palabra.charCodeAt(i);

      if (indice==32)
      {
      let cifradoEspacio=32;
      cifrado += String.fromCharCode(cifradoEspacio);
      }

      else 
      {
      cifrado += String.fromCharCode((indice-65+ numContrasena)%26+65);     
      }
      //console.log(cifrado);

    }
    return cifrado;
  },

  decode: function (contrasena,palabra) 
  {
    if(palabra==null || contrasena==0 || palabra==0 ||  contrasena==null)
      {
      throw new TypeError("no puede ser nulo");
      }

      let decifrado = "";

    for (var i = 0; i <= palabra.length; i++) 
     {
      let numContrasena=Number(contrasena);  
      let indice = palabra.charCodeAt(i);
      if (indice==32)
        {
        let cifradoEspacio=32;
        decifrado += String.fromCharCode(cifradoEspacio);
        }
    
        else 
        {
        decifrado += String.fromCharCode((indice+65-numContrasena)%26+65);     
      // console.log(decifrado);
        }
      }
      return decifrado;

  }
};


export default cipher;


