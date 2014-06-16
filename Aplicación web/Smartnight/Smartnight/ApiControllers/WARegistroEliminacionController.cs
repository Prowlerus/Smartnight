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
    public class WARegistroEliminacionController : ApiController
    {
        private SmartnightEntities db = new SmartnightEntities();

        // GET api/WARegistroEliminacion
        public IEnumerable<RegistroEliminacion> GetRegistroEliminacions([FromUri] int empresaId, DateTime fechaSinc)
        {
            var registroeliminacions = db.RegistroEliminacions.Where(u => u.EmpresaId == empresaId).Where(u => u.FechaSincro > fechaSinc);
            return registroeliminacions.AsEnumerable();
        }

       

        //// POST api/WARegistroEliminacion
        //public HttpResponseMessage PostRegistroEliminacion(Boolean[] registroeliminacion)
        //{
        //    if(registroeliminacion[0])   
        //    {
        //        db.Database.ExecuteSqlCommand("DELETE FROM RegistroEliminacion");                

        //        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
                
        //        return response;
        
        //    }
        //    else
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.Accepted, ModelState);
        //    }
        //}           

       

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}