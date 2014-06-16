using Smartnight.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Smartnight.Controllers
{
    [Authorize]
    public class TurnoController : Controller
    {
        //
        // GET: /Turno/
        private SmartnightEntities db = new SmartnightEntities();
        public ActionResult Index()
        {
            var admin = Session["Admin"] as Administrador;
            TurnoVM modeloTurno = new TurnoVM();

            modeloTurno.listaTurnos = db.Turnoes.Where(u => u.EmpresaId == admin.EmpresaId).ToList();
            modeloTurno.listaComandas = db.Comandas.Where(u => u.EmpresaId == admin.EmpresaId).ToList();
            modeloTurno.listaLineas = db.LineaComandas.Where(u => u.EmpresaId == admin.EmpresaId).ToList();

            return View(modeloTurno);
        }

    }
}
