using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smartnight.ViewModels
{
    public class TurnoVM
    {
        public List<Turno> listaTurnos { get; set; }
        public List<Comanda> listaComandas { get; set; }
        public List<LineaComanda> listaLineas { get; set; }

    }
}