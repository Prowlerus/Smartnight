using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Smartnight
{
    [DataContract(IsReference = true)]
    [MetadataType(typeof(RegistroEliminacionMetaData))]
    public partial class RegistroEliminacion { }


    public class RegistroEliminacionMetaData
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public int IdObjeto { get; set; }


        [DataMember]
        public string TipoObjeto { get; set; }


        [DataMember]
        public int EmpresaId { get; set; }

    }
}