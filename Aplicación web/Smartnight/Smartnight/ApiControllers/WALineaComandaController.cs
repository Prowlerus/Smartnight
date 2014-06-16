using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Transactions;
using System.Web;
using System.Web.Http;

namespace Smartnight.ApiControllers
{
    public class WALineaComandaController : ApiController
    {
        private SmartnightEntities db = new SmartnightEntities();

       
        // POST api/WALineaComanda

        public HttpResponseMessage PostLineaComanda(List<LineaComanda> lineas)
        {
            db.Database.Connection.Open();
            using (TransactionScope txScope = new TransactionScope())               
            {
                try
                {
                    foreach (LineaComanda miLinea in lineas)
                    {
                        db.LineaComandas.Add(miLinea);
                    }
                    db.SaveChanges();
                    txScope.Complete();
                }
                catch (Exception ex)
                {                                      
                    return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex);
                }
                finally {
                    if (db.Database.Connection != null && db.Database.Connection.State == System.Data.ConnectionState.Open)
                    {
                        db.Database.Connection.Close();
                    }  
                }
                return Request.CreateResponse(HttpStatusCode.OK);
            }
        }
        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}