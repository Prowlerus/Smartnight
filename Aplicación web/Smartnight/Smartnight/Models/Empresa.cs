using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Smartnight
{
    [MetadataType(typeof(EmpresaMetaData))]
    public partial class Empresa { }

    public class EmpresaMetaData
    {
        [Required]
        [StringLength(20)]
        [Display(Name = "Nombre Empresa")]
        public string Nombre { get; set; }
        [Required]
        [StringLength(50)] 
        public string Direccion { get; set; }
        [Required]
        [StringLength(20)]
        public string Telefono { get; set; }
        [Required]
        [StringLength(50)]
        public string Email { get; set; }
        [Required]
        [StringLength(20)]
        public string Rut { get; set; }
        [Required]
        [StringLength(20)]
        public string RazonSocial { get; set; }    

    }
}

