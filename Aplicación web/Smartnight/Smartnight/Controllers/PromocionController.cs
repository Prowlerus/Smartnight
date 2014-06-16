using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Smartnight.ApiControllers
{
    [Authorize]
    public class PromocionController : Controller
    {
        private SmartnightEntities db = new SmartnightEntities();

        //
        // GET: /Promocion/

        public ActionResult Index()
        {
            var admin = Session["Admin"] as Administrador;
            var promocions = db.Promocions.Where(p => p.Empresa.Id == admin.EmpresaId).Include(p => p.Producto);
            return View(promocions.ToList());
        }

        //
        // GET: /Promocion/Details/5

        public ActionResult Details(int id = 0)
        {
            Promocion promocion = db.Promocions.Find(id);
            if (promocion == null)
            {
                return HttpNotFound();
            }
            return View(promocion);
        }

        //
        // GET: /Promocion/Create

        public ActionResult Create()
        {
            var admin = Session["Admin"] as Administrador;
            ViewBag.ProductoId = new SelectList(db.Productoes.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre");
            return View();
        }

        //
        // POST: /Promocion/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Promocion promocion)
        {  
            var admin = Session["Admin"] as Administrador;
            if (ModelState.IsValid)
            {
                
                promocion.EmpresaId = admin.EmpresaId;
                promocion.FechaSincro = DateTime.UtcNow;
                db.Promocions.Add(promocion);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ProductoId = new SelectList(db.Productoes.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre", promocion.ProductoId);
            return View(promocion);
        }

        //
        // GET: /Promocion/Edit/5

        public ActionResult Edit(int id = 0)
        {
            var admin = Session["Admin"] as Administrador;
            Promocion promocion = db.Promocions.Find(id);
            if (promocion == null)
            {
                return HttpNotFound();
            }           
            ViewBag.ProductoId = new SelectList(db.Productoes.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre", promocion.ProductoId);
            return View(promocion);
        }

        //
        // POST: /Promocion/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Promocion promocion)
        {
            var admin = Session["Admin"] as Administrador;
            if (ModelState.IsValid)
            {                                                 
                promocion.EmpresaId = admin.EmpresaId;
                promocion.FechaSincro = DateTime.UtcNow;
                db.Entry(promocion).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ProductoId = new SelectList(db.Productoes.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre", promocion.ProductoId);
            return View(promocion);
        }

        //
        // GET: /Promocion/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Promocion promocion = db.Promocions.Find(id);
            if (promocion == null)
            {
                return HttpNotFound();
            }
            return View(promocion);
        }

        //
        // POST: /Promocion/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Promocion promocion = db.Promocions.Find(id);
            db.Promocions.Remove(promocion);
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