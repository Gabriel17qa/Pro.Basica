class Billete
{
  constructor(v, c)
  {
    this.valor= v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad
      }
      else
      {
         papeles = div;
      }
        entregado.push( new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);
    }
  }

  if (dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo y no tengo dinero :( <br/>";
  }
  else
  {
    for (var e of entregado)
    {
      resultado.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br />";
    }
  }
}
s
