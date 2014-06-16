using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Smartnight.Models
{
    public class Admin
    {
        [Required]
        [StringLength(20)]
        [Display(Name="Usuario administrador: ")]
        public String Usuario { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(20)]
        [Display(Name = "Contraseña: ")]
        public String Password { get; set; }

    }
}