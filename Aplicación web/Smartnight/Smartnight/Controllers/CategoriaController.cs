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
    public class CategoriaController : Controller
    {
        private SmartnightEntities db = new SmartnightEntities();

        //
        // GET: /Categoria/

        public ActionResult Index()
        {
            var admin = Session["Admin"] as Administrador;
            var categorias = db.Categorias.Where(u => u.EmpresaId == admin.EmpresaId);
                      return View(categorias.ToList());
        }

        //
        // GET: /Categoria/Details/5

        public ActionResult Details(int id = 0)
        {
            Categoria categoria = db.Categorias.Find(id);
            if (categoria == null)
            {
                return HttpNotFound();
            }
            return View(categoria);
        }

        //
        // GET: /Categoria/Create

        public ActionResult Create()
        {            
            return View();
        }

        //
        // POST: /Categoria/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Categoria categoria)
        {
            if (ModelState.IsValid)
            {        
                var admin = Session["Admin"] as Administrador;
                categoria.EmpresaId = admin.EmpresaId;
                categoria.FechaSincro = DateTime.UtcNow;
                db.Categorias.Add(categoria);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(categoria);
        }

        //
        // GET: /Categoria/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Categoria categoria = db.Categorias.Find(id);
            if (categoria == null)
            {
                return HttpNotFound();
            }            
            return View(categoria);
        }

        //
        // POST: /Categoria/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Categoria categoria)
        {
            if (ModelState.IsValid)
            {
                var admin = Session["Admin"] as Administrador;
                categoria.EmpresaId = admin.EmpresaId;
                categoria.FechaSincro = DateTime.UtcNow;
                db.Entry(categoria).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }            
            return View(categoria);
        }

        //
        // GET: /Categoria/Delete/5

        public ActionResult Delete(bool? saveChangesError = false, int id = 0)
        {
            if (saveChangesError.GetValueOrDefault())
            {
                ViewBag.ErrorMessage = "No se puede eliminar la categoría. Asegúrese de que no existen datos asociados con esta categoría.";
            }
            Categoria categoria = db.Categorias.Find(id);
            if (categoria == null)
            {
                return HttpNotFound();
            }
            return View(categoria);
        }

        //
        // POST: /Categoria/Delete/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id)
        {
            try
            {
                Categoria categoria = db.Categorias.Find(id);
                db.Categorias.Remove(categoria);
                db.SaveChanges();
               
            }
            catch (DataException ex)
            {
                return RedirectToAction("Delete", new { id = id, saveChangesError = true });               
            }
           return RedirectToAction("Index"); 
        }



        
        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}