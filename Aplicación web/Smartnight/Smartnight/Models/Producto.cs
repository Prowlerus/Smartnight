using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Smartnight
{
    [DataContract(IsReference=true)]
    [MetadataType(typeof(ProductoMetaData))]
    public partial class Producto { }


    public class ProductoMetaData
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        [Required]
        [StringLength(20)]
        public string Nombre { get; set; }

        [DataMember]
        [Required]
        [Display(Name = "Precio ($)")]
        [Range(typeof(decimal), "0", "99999999")]
        public decimal Precio { get; set; }

        [DataMember]
        [Required]
        [Range(typeof(Int32), "0", "9999")]
        public int Stock { get; set; }

        [DataMember]
        [Required(ErrorMessage = "Debe seleccionar una categoría para el producto.")]     
        public int CategoriaId { get; set; }

        [DataMember]
        public bool Activo { get; set; }
    }       
}