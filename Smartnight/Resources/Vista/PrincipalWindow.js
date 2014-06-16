exports.PrincipalWindow = function() {

	var ui = require('/UI/UIPrincipal'),

	//CONTENEDOR
	 winMain = ui.ContenedorPrincipal(),
	//BARRA DE ESTADO
	 bar = ui.BarraEstado(),
	//LABEL USUARIO LOGUEADO
	 lblUsuarioLog = ui.LabelUsuarioLog(""),
	//var sincronizar = ui.ButtonSincronizar();
	// codigo = ui.ButtonCodigo(),
	//CONTENEDOR TABLA DE COMANDAS
	 contenedorTablaComandas = ui.ContenedorTablaComandas(),
	//CONTENEDOR COMANDA
	 contenedorCabeza = ui.ContenedorCabezaComanda(),
	 contenedorPie = ui.ContenedorPieComanda(),
	 contenedorComanda = ui.ContenedorComanda(),
	 cabezaTabla = ui.CabezaTabla(),
	 pieTabla = ui.PieTabla(),
	//CONTENEDOR GLOBAL PC
	 contenedorGlobalPC = ui.ContenedorGlobalPC(),
	//CONTENEDOR PRODUCTOS
	 contenedorProductos = ui.ContenedorProductos(),
	//CONTENEDOR CATEGORIAS
	 contenedorCategorias = ui.ContenedorCategorias(),
	//CONTENEDOR OPCIONES COMANDA
	 contenedorOpcionesComanda = ui.ContenedorOpcionesComanda(),
	//LABEL TITULO GLOBAL PC
	//var lblGPC = ui.LabelGPCTitulo("Categorías");
	//BOTON BACK PRODUCTOS
	//var btnProdBack = ui.ButtonProdBack();
	//BOTON NUEVA COMANDA
	 btnNuevaComanda = ui.ButtonNuevaComanda(),
	//LISTVIEW LISTAS COMANDAS
	 tvComandas = ui.TableViewComandas(),
	//BOTON ELIMINAR COMANDA
	btnEliminarComanda = ui.ButtonEliminarComanda(),
	//BOTON CERRAR COMANDA
	 btnCerrarComanda = ui.ButtonCerrarComanda();
	//BOTON IMPRIMIR
	//	var bntImprimirComanda = ui.ButtonImprimir();

	//STATUS BAR
	bar.add(lblUsuarioLog);
	bar.LabelUsuarioLog = lblUsuarioLog;
	
	//bar.add(sincronizar);
	//bar.ButtonSincronizar = sincronizar;
	
	//bar.add(codigo);
	//bar.ButtonCodigo = codigo;

	winMain.add(bar);
	winMain.BarraEstado = bar;

	contenedorCabeza.add(cabezaTabla);
	contenedorPie.add(pieTabla);
	winMain.add(contenedorCabeza);
	winMain.add(contenedorComanda);
	winMain.add(contenedorPie);
	contenedorPie.PieTabla = pieTabla;
	winMain.ContenedorPieComanda = contenedorPie;
	winMain.ContenedorComanda = contenedorComanda;
	winMain.ContenedorPieComanda = contenedorPie;

	//CONTENEDOR OPCIONES COMANDA
	contenedorOpcionesComanda.add(btnEliminarComanda);
	contenedorOpcionesComanda.ButtonEliminarComanda = btnEliminarComanda;

	contenedorOpcionesComanda.add(btnCerrarComanda);
	contenedorOpcionesComanda.ButtonCerrarComanda = btnCerrarComanda;

	//contenedorOpcionesComanda.add(bntImprimirComanda);
	//contenedorOpcionesComanda.ButtonImprimir = bntImprimirComanda;

	winMain.add(contenedorOpcionesComanda);
	winMain.ContenedorOpcionesComanda = contenedorOpcionesComanda;

	//LISTA COMANDAS
	contenedorTablaComandas.add(btnNuevaComanda);
	contenedorTablaComandas.ButtonNuevaComanda = btnNuevaComanda;

	contenedorTablaComandas.add(tvComandas);
	contenedorTablaComandas.TableViewComandas = tvComandas;

	winMain.add(contenedorTablaComandas);
	winMain.ContenedorTablaComandas = contenedorTablaComandas;
	//LABEL CATEGORIA/PRODUCTOS
	//contenedorGlobalPC.add(lblGPC);
	//contenedorGlobalPC.LabelGPCTitulo = lblGPC;
	//BOTON ATRAS
	//contenedorGlobalPC.add(btnProdBack);
	//contenedorGlobalPC.ButtonProdBack = btnProdBack;
	//PRODUCTOS
	contenedorGlobalPC.add(contenedorProductos);
	contenedorGlobalPC.ContenedorProductos = contenedorProductos;
	//CATEGORIAS
	contenedorGlobalPC.add(contenedorCategorias);
	contenedorGlobalPC.ContenedorCategorias = contenedorCategorias;
	//hace falta luego de armar la estructura asignar una instancia para poder modificar desde controller

	winMain.add(contenedorGlobalPC);
	winMain.ContenedorGlobalPC = contenedorGlobalPC;
	return winMain;

}; 