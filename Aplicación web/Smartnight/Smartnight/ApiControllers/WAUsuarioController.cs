using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Smartnight.ApiControllers
{
    public class WAUsuarioController : ApiController
    {
        private SmartnightEntities db = new SmartnightEntities();

        // GET api/WAUsuario
        public IEnumerable<Usuario> GetUsuarios([FromUri] int empresaId, DateTime fechaSinc)
        {
            var usuarios = db.Usuarios.Where(u => u.EmpresaId == empresaId).Where(u => u.FechaSincro > fechaSinc);
            return usuarios.AsEnumerable();
        }

        // GET api/WAUsuario/5
        public Usuario GetUsuario(int id)
        {
            Usuario usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return usuario;
        }   


        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}