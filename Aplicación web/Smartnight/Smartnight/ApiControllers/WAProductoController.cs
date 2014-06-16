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
    public class WAProductoController : ApiController
    {
        private SmartnightEntities db = new SmartnightEntities();

        // GET api/ApiProducto
        public IEnumerable<Producto> GetProductoes([FromUri] int empresaId, DateTime fechaSinc)
        {           
            var productoes = db.Productoes.Where(u => u.EmpresaId == empresaId).Where(u => u.FechaSincro > fechaSinc);

            return productoes.AsEnumerable();
        }

        // GET api/ApiProducto/5
        public Producto GetProducto(int id)
        {
            Producto producto = db.Productoes.Find(id);
            if (producto == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return producto;
        }
        

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}