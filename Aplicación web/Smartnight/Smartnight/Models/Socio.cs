using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Smartnight
{
    [DataContract(IsReference = true)]
    [MetadataType(typeof(SocioMetaData))]
    public partial class Socio { }  
    
    public class SocioMetaData
    {

        [DataMember]
        public int Id { get; set; }

        [StringLength(20)]
        [Required]
        [DataMember]
        public string Codigo { get; set; }

        [StringLength(20)]
        [Required]
        [DataMember]
        public string Nombre { get; set; }

        [StringLength(20)]
        [Required]
        [DataMember]
        public string Apellido { get; set; }

        [StringLength(20)]
        [Required]
        [DataMember]
        public string Telefono { get; set; }

        [StringLength(50)]
        [EmailAddress(ErrorMessage = "Dirección de Email incorrecta")]
        [Required]
        [DataMember]
        public string Email { get; set; }


        [Display(Name = "Porcentaje Descuento (%)")]
        [Required]
        [Range(0, 100)]
        [DataMember]
        public double PorcentajeDesc { get; set; }   


    }
    
}