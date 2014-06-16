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
    public class WASocioController : ApiController
    {
        private SmartnightEntities db = new SmartnightEntities();

        // GET api/WASocio
        public IEnumerable<Socio> GetSocios([FromUri] int empresaId, DateTime fechaSinc)
        {        
            var socios = db.Socios.Where(u => u.EmpresaId == empresaId).Where(u => u.FechaSincro > fechaSinc);

            return socios.AsEnumerable();
        }

        // GET api/WASocio/5
        public Socio GetSocio(int id)
        {
            Socio socio = db.Socios.Find(id);
            if (socio == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return socio;
        }        

       

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}