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
    public class UsuarioController : Controller
    {
        private SmartnightEntities db = new SmartnightEntities();

        //
        // GET: /Usuario/

        public ActionResult Index()
        {
            var admin = Session["Admin"] as Administrador;
            var usuarios = db.Usuarios.Where(u => u.EmpresaId == admin.EmpresaId);
            return View(usuarios.ToList());
        }
        // VALIDAR PIN CON JSON 
        //public JsonResult ExistePin(string pin)
        //{
        //        try
        //        {
        //            var miPin = db.Usuarios.Single(m => m.Pin == pin);
        //            return Json(false, JsonRequestBehavior.AllowGet);
        //        }
        //        catch (Exception)
        //        {
        //            return Json(true, JsonRequestBehavior.AllowGet);
        //        }            
        //}
        //
        // GET: /Usuario/Details/5

        public ActionResult Details(int id = 0)
        {                  
            Usuario usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return HttpNotFound();
            }
            return View(usuario);
        }

        //
        // GET: /Usuario/Create

        public ActionResult Create()
        {
            ViewBag.EmpresaId = new SelectList(db.Empresas, "Id", "Nombre");
            return View();
        }

        //
        // POST: /Usuario/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Usuario usuario)
        {
            if (ModelState.IsValid && (!db.Usuarios.Any(u => u.Pin.Equals(usuario.Pin))))
            {
                var admin = Session["Admin"] as Administrador;
                usuario.EmpresaId = admin.EmpresaId;
                usuario.FechaSincro = DateTime.UtcNow;
                db.Usuarios.Add(usuario);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            else 
            {
                ModelState.AddModelError("Pin", "El pin ingresado ya se encuentra en uso.");
            }
            return View(usuario);
        }

        //
        // GET: /Usuario/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Usuario usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return HttpNotFound();
            }         
            return View(usuario);
        }

        //
        // POST: /Usuario/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                var admin = Session["Admin"] as Administrador;
                usuario.EmpresaId = admin.EmpresaId;
                usuario.FechaSincro = DateTime.UtcNow;
                db.Entry(usuario).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }           
            return View(usuario);
        }

        //
        // GET: /Usuario/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Usuario usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return HttpNotFound();
            }
            return View(usuario);
        }

        //
        // POST: /Usuario/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Usuario usuario = db.Usuarios.Find(id);
            db.Usuarios.Remove(usuario);
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