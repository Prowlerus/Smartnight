//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Smartnight
{
    using System;
    using System.Collections.Generic;
    
    public partial class RegistroEliminacion
    {
        public int Id { get; set; }
        public int IdObjeto { get; set; }
        public string TipoObjeto { get; set; }
        public int EmpresaId { get; set; }
        public System.DateTime FechaSincro { get; set; }
    
        public virtual Empresa Empresa { get; set; }
    }
}
