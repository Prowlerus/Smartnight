using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Smartnight
{
    [DataContract(IsReference = true)]
    [MetadataType(typeof(LineaComandaMetaData))]
    public partial class LineaComanda { }

    public class LineaComandaMetaData
    {

        [DataMember]
        public int LineaId { get; set; }

        [DataMember]
        public int Cantidad { get; set; }

        [DataMember]
        public int ProductoId { get; set; }

        [DataMember]
        public decimal Total { get; set; }

        [DataMember]
        public System.DateTime Fecha { get; set; }

        [DataMember]
        public int NumeroServicio { get; set; }

        [DataMember]
        public string Dispositivo { get; set; }

        [DataMember]
        public int EmpresaId { get; set; }
    }
}