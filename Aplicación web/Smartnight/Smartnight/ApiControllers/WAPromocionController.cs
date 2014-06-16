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
    public class WAPromocionController : ApiController
    {
        private SmartnightEntities db = new SmartnightEntities();

        // GET api/WAPromocion
        public IEnumerable<Promocion> GetPromocions([FromUri] int empresaId, DateTime fechaSinc)
        {  
            var promocions = db.Promocions.Where(u => u.EmpresaId == empresaId).Where(u => u.FechaSincro > fechaSinc);

            return promocions.AsEnumerable();
        }

        // GET api/WAPromocion/5
        public Promocion GetPromocion(int id)
        {
            Promocion promocion = db.Promocions.Find(id);
            if (promocion == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return promocion;
        }
   

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}