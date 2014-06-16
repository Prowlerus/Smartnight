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
    public class WACategoriaController : ApiController
    {
        private SmartnightEntities db = new SmartnightEntities();

        // GET api/WACategoria
        public IEnumerable<Categoria> GetCategorias([FromUri] int empresaId, DateTime fechaSinc)
        {
            var categorias = db.Categorias.Where(u => u.EmpresaId == empresaId).Where(u => u.FechaSincro > fechaSinc); 

            return categorias.AsEnumerable();            
        }


        //No se si quiero este método
        // GET api/WACategoria/5
        public Categoria GetCategoria(int id)
        {
            Categoria categoria = db.Categorias.Find(id);
            if (categoria == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return categoria;
        }  

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}