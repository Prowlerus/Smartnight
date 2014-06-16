using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Smartnight
{
    [DataContract(IsReference = true)]
    [MetadataType(typeof(TurnoMetaData))]
    public partial class Turno { }

    public class TurnoMetaData
    {

        [DataMember]
        public System.DateTime FechaInicio { get; set; }

        [DataMember]
        public System.DateTime FechaFin { get; set; }

        [DataMember]
        public string Dispositivo { get; set; }

        [DataMember]
        public decimal MontoVendido { get; set; }

        [DataMember]
        public int UsuarioId { get; set; }

        [DataMember]
        public int EmpresaId { get; set; }
    }
}
