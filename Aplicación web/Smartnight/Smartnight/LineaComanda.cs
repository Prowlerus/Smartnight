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
    
    public partial class LineaComanda
    {
        public int LineaId { get; set; }
        public int Cantidad { get; set; }
        public int ProductoId { get; set; }
        public decimal Total { get; set; }
        public System.DateTime Fecha { get; set; }
        public int NumeroServicio { get; set; }
        public string Dispositivo { get; set; }
        public int EmpresaId { get; set; }
    
        public virtual Comanda Comanda { get; set; }
        public virtual Empresa Empresa { get; set; }
        public virtual Producto Producto { get; set; }
    }
}
