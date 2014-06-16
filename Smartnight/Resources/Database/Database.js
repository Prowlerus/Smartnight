function CrearDatabase(dbNombre) {
	//Creo o abro la base de datos

	var db = Ti.Database.open(dbNombre); 
   /* db.remove(); //Recordar quitar
	db = Ti.Database.open(dbNombre);*/
	//Habilito constraint
	db.execute('PRAGMA foreign_keys = ON');
	//Creo tabla Usuario
	db.execute('CREATE TABLE IF NOT EXISTS Usuario (UsuarioId INTEGER NOT NULL  UNIQUE , Pin TEXT PRIMARY KEY  , Nombre TEXT NOT NULL, EmpresaId INTEGER NOT NULL);');
	Ti.API.info('Tabla usuario creada');
	//Creo tabla Turno
	db.execute('CREATE TABLE IF NOT EXISTS Turno (FechaInicio TIMESTAMP NOT NULL, FechaFin TIMESTAMP , Activo BOOL , MontoVendido DOUBLE NOT NULL  DEFAULT (0) , UsuarioId INTEGER NOT NULL, Dispositivo TEXT NOT NULL, PRIMARY KEY(FechaInicio, Dispositivo),  FOREIGN KEY(UsuarioId) REFERENCES Usuario(UsuarioId));');
	Ti.API.info('Tabla turno creada');
	//Creo tabla Categoria
	db.execute('CREATE TABLE IF NOT EXISTS Categoria (CategoriaId INTEGER PRIMARY KEY  , Nombre TEXT NOT NULL UNIQUE , Color TEXT);');
	Ti.API.info('Tabla categoria creada');
	//Creo tabla Producto
	db.execute('CREATE TABLE IF NOT EXISTS Producto (ProductoId INTEGER PRIMARY KEY , Nombre TEXT NOT NULL , Precio DOUBLE NOT NULL , Stock INTEGER, Activo BOOL , CategoriaId INTEGER NOT NULL , FOREIGN KEY(CategoriaId) REFERENCES Categoria(CategoriaId));');
	Ti.API.info('Tabla producto creada');
	//Creo tabla Comanda
	db.execute('CREATE  TABLE  IF NOT EXISTS Comanda (NroServicio TEXT NOT NULL , Fecha TIMESTAMP NOT NULL , Dispositivo TEXT NOT NULL , Total DOUBLE NOT NULL  DEFAULT 0, FechaTurno TIMESTAMP, PRIMARY KEY(NroServicio, Dispositivo, Fecha), FOREIGN KEY(Dispositivo,FechaTurno) REFERENCES Turno(Dispositivo,FechaInicio))');
	Ti.API.info('Tabla comanda creada');
	//Creo tabla LineaComanda
	db.execute('CREATE  TABLE IF NOT EXISTS LineaComanda (Id INTEGER PRIMARY KEY AUTOINCREMENT, Cantidad INTEGER NOT NULL , Producto INTEGER NOT NULL , TotalLinea DOUBLE NOT NULL , Fecha TIMESTAMP NOT NULL , NroServicio INTEGER NOT NULL , Dispositivo TEXT NOT NULL, FOREIGN KEY(Fecha, NroServicio, Dispositivo) REFERENCES Comanda(Fecha, NroServicio, Dispositivo))');	
	Ti.API.info('Tabla Linea de comanda creada');
	//Creo tabla Promocion
	db.execute('CREATE TABLE IF NOT EXISTS Promocion (Id INTEGER PRIMARY KEY, Codigo TEXT, ProductoId INTEGER, PorcentajeDesc INTEGER, ImporteDesc INTEGER, FOREIGN KEY(ProductoId) REFERENCES Producto(ProductoId) )');
	Ti.API.info('Tabla Promociones creada');
	//Creo tabla Socio
	db.execute('CREATE TABLE IF NOT EXISTS Socio (Id INTEGER PRIMARY KEY, Codigo TEXT UNIQUE, Nombre TEXT, PorcentajeDesc INTEGER)');
	Ti.API.info('Tabla Socio creada');
	//tabla sincronizacion
	db.execute('CREATE TABLE IF NOT EXISTS FechaSincro (Id INTEGER PRIMARY KEY, Fecha TIMESTAMP)');
    Ti.API.info('Tabla FechaSincro creada');
	
	db.close();

};

exports.CrearDatabase = CrearDatabase;
