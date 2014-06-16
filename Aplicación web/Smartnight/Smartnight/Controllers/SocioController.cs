using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Smartnight.Controllers
{
    public class SocioController : Controller
    {
        private SmartnightEntities db = new SmartnightEntities();

        //
        // GET: /Socio/

        public ActionResult Index()
        {
            var admin = Session["Admin"] as Administrador;
            var socios = db.Socios.Where(u => u.EmpresaId == admin.EmpresaId);
            return View(socios.ToList());
        }

        //
        // GET: /Socio/Details/5

        public ActionResult Details(int id = 0)
        {
            Socio socio = db.Socios.Find(id);
            if (socio == null)
            {
                return HttpNotFound();
            }
            return View(socio);
        }

        //
        // GET: /Socio/Create

        public ActionResult Create()
        {
   
            return View();
        }

        //
        // POST: /Socio/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Socio socio)
        {
            if (ModelState.IsValid)
            {
                var admin = Session["Admin"] as Administrador;
                socio.EmpresaId = admin.EmpresaId;
                socio.FechaSincro = DateTime.UtcNow;
                db.Socios.Add(socio);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

      
            return View(socio);
        }

        //
        // GET: /Socio/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Socio socio = db.Socios.Find(id);
            if (socio == null)
            {
                return HttpNotFound();
            }
           
            return View(socio);
        }

        //
        // POST: /Socio/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Socio socio)
        {
            if (ModelState.IsValid)
            {
                var admin = Session["Admin"] as Administrador;
                socio.EmpresaId = admin.EmpresaId;
                socio.FechaSincro = DateTime.UtcNow;
                db.Entry(socio).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
       
            return View(socio);
        }

        //
        // GET: /Socio/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Socio socio = db.Socios.Find(id);
            if (socio == null)
            {
                return HttpNotFound();
            }
            return View(socio);
        }

        //
        // POST: /Socio/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Socio socio = db.Socios.Find(id);
            db.Socios.Remove(socio);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}