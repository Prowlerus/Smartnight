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
    public class ProductoController : Controller
    {
        private SmartnightEntities db = new SmartnightEntities();

        //
        // GET: /Producto/

        public ActionResult Index()
        {
            var admin = Session["Admin"] as Administrador;
            var productoes = db.Productoes.Where(u => u.EmpresaId == admin.EmpresaId);
            return View(productoes.ToList());
        }

        //
        // GET: /Producto/Details/5

        public ActionResult Details(int id = 0)
        {
            Producto producto = db.Productoes.Find(id);
            if (producto == null)
            {
                return HttpNotFound();
            }
            return View(producto);
        }

        //
        // GET: /Producto/Create

        public ActionResult Create()
        {
            var admin = Session["Admin"] as Administrador;
            ViewBag.CategoriaId = new SelectList(db.Categorias.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre");
            return View();
        }

        //
        // POST: /Producto/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Producto producto)
        {  
            var admin = Session["Admin"] as Administrador;
            if (ModelState.IsValid)
            {
                
                producto.EmpresaId = admin.EmpresaId;
                producto.FechaSincro = DateTime.UtcNow;
                db.Productoes.Add(producto);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CategoriaId = new SelectList(db.Categorias.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre", producto.CategoriaId);
            return View(producto);
        }

        //
        // GET: /Producto/Edit/5

        public ActionResult Edit(int id = 0)
        {
            var admin = Session["Admin"] as Administrador;
            Producto producto = db.Productoes.Find(id);
            if (producto == null)
            {
                return HttpNotFound();
            }
            ViewBag.CategoriaId = new SelectList(db.Categorias.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre", producto.CategoriaId);
            return View(producto);
        }

        //
        // POST: /Producto/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Producto producto)
        {   
            var admin = Session["Admin"] as Administrador;
            if (ModelState.IsValid)
            {
               
                producto.EmpresaId = admin.EmpresaId;
                producto.FechaSincro = DateTime.UtcNow;
                db.Entry(producto).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CategoriaId = new SelectList(db.Categorias.Where(u => u.EmpresaId == admin.EmpresaId), "Id", "Nombre", producto.CategoriaId);
            return View(producto);
        }                   


        //
        // GET: /Producto/Delete/5

        public ActionResult Delete(bool? saveChangesError = false, int id = 0)
        {
            if (saveChangesError.GetValueOrDefault())
            {
                ViewBag.ErrorMessage = "No se puede eliminar el producto. Asegúrese que no existen datos asociados con este producto.";
            }
            Producto producto = db.Productoes.Find(id);
            if (producto == null)
            {
                return HttpNotFound();
            }
            return View(producto);
        }

        //
        // POST: /Producto/Delete/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id)
        {
            try
            {
                Producto producto = db.Productoes.Find(id);
                db.Productoes.Remove(producto);
                db.SaveChanges();
            }
            catch (DataException){
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