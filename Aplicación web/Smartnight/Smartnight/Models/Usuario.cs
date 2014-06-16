using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Runtime.Serialization;

namespace Smartnight
{
    [DataContract(IsReference = true)]
    [MetadataType(typeof(UsuarioMetaData))]
    public partial class Usuario{}

    public class UsuarioMetaData
    {

        [DataMember]
        public int Id { get; set; }

        [DataMember]
        [Required]
        [StringLength(20)]
        public string Nombre { get; set; }

        [DataMember]         
        [Required]            
        [StringLength(4, MinimumLength=4)]       
        public string Pin { get; set; }

        [DataMember]
        [Required]
        [StringLength(20)]
        public string Apellido { get; set; }

        [DataMember]
        public int EmpresaId { get; set; }
    }
}

