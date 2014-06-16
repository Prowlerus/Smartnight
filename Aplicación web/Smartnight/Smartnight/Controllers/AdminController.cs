using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Smartnight.ApiControllers
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        private SmartnightEntities db = new SmartnightEntities();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetEmpresa()
        {
            var admin = Session["Admin"] as Administrador;
            string nombreEmpresa = db.Empresas.SingleOrDefault(u => u.Id == admin.EmpresaId).Nombre;
            return Content(nombreEmpresa);
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(Smartnight.Models.Admin admin)
        {
            if (ModelState.IsValid)
            {
                if (EsValido(admin.Usuario, admin.Password))
                {                
                    FormsAuthentication.SetAuthCookie(admin.Usuario, false);
                    return RedirectToAction("Index", "Usuario");    //Aqui redirijo a página logueada
                }
                else
                {
                    ModelState.AddModelError("", "Datos de ingreso incorrectos.");           
                }
            }                       
            return View();
        }
   
        public ActionResult Logout() {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");               
        }

        private bool EsValido(string usuario, string password)
        {
            bool valido = false;

            using (var db = new SmartnightEntities())
            {
                var admin = db.Administradors.FirstOrDefault(u => u.Usuario == usuario);
                if(admin != null)
                {
                    if(admin.Password == password)
                    {
                        valido = true;
                        Session["Admin"] = admin;
                    }                
                }            
            }
            return valido;
        }   

    }
}
