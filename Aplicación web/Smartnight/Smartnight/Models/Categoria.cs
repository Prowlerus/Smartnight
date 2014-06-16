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
    [MetadataType(typeof(CategoriaMetaData))]
    public partial class Categoria { }
   
    
    public class CategoriaMetaData
    {
       
        [Required]
        [StringLength(20)]
        [DataMember]
        [Display(Name = "Categoría")]
        public string Nombre { get; set; }

        [Required]
        [DataMember]
        [StringLength(7)] 
        public string Color { get; set; }

        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public int EmpresaId { get; set; }

    }
}