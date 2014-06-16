using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Smartnight
{
    [DataContract(IsReference = true)]
    [MetadataType(typeof(PromocionMetaData))]
    public partial class Promocion { }

    public class PromocionMetaData
    {
        [DataMember]
        [Required]
        [StringLength(20)] 
        public string Codigo { get; set; }

        [DataMember]
        [Required]
        [Range(0, 9999)]
        public Nullable<int> ProductoId { get; set; }

        [DataMember]
        [Required] 
        [Display(Name = "Porcentaje Descuento (%)")]
        [Range(0, 100)]
        public double PorcentajeDesc { get; set; }

        [DataMember]
        [Display(Name = "Importe Descuento ($)")]
        [Required] 
        public decimal ImporteDesc { get; set; }       
    } 
}