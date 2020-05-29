export const idiomas = {
    ES: {
        diasCortos: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        mesCortos: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        onboarding: { btn1: "Siguiente", btn2: "Ya tengo cuenta.", btn3: "Comenzar" },
        iniciosession: {
            titulo: "Iniciá sesión", leyenda: "Completá tus datos para ingresar a tu cuenta",
            mail: "Ingresá tu mail", mail_ph: "jose@gmail.com", clave: "Ingresá tu contraseña", datos: "Recordar mis datos", btn1: "Iniciar sesión",
            btn2: "Olvidé mi contraseña", btn3: "Ingresar sin registrarme", errorMail: { err1: "Mail incorrecto", err2: "wer" },
            errorClave: { err1: "Tu contraseña debe tener 4 caraceres", err2: "wer" }
        },
        recuperaclave: {
            titulo: "Recuperá tu contraseña", leyenda: "Completá tus datos para recuperar tu contraseña",
            mail: "Ingresá tu mail", mail_ph: "jose@gmail.com", documento: "Ingresá el DNI del titular", documento_ph: "99999999", btn1: "Recuperar contraseña",
            errorMail: { err1: "Mail incorrecto", err2: "wer" },
            errorDocumento: { err1: "Documento incorrecto", err2: "wer" }
        },
        recuperaclavemsg: { titulo: "¡Todo listo para recuperar tu contraseña!", leyenda: "Ingresá a tu casilla de mail y seguí los pasos para recuperar tu contraseña." },
        crearclave: {
            titulo: "Creá tu contraseña", leyenda: "Creá tu nueva contraseña para volver a acceder a tu cuenta.",
            clave1: "Ingresá tu nueva contraseña", clave2: "Repetí tu nueva contraseña", btn1: "Crear nueva contraseña",
            errorClave1: { err1: "Clave1 incorrecto", err2: "wer" },
            errorClave2: { err1: "Clave2 incorrecto", err2: "wer" }
        },
        crearclavemsg: { titulo: "¡Genial!", leyenda: "Tu contraseña fue creada con éxito.", btn1: "Ingresar a mi cuenta" },
        accesoplan: {
            titulo: "Accedé a tu Plan Iké", leyenda: "Ingresá el DNI del titular para acceder a tu cobertura.",
            documento: "Ingresá el DNI del titular", documento_ph: "99999999", btn1: "Ingresar a mi cobertura",
            btn2: "Quiero contratar un Plan Iké", btn3: "Ingresar sin registrarme", btn4: "Ya tengo cuenta", btn5: "Ayuda",
            errorDocumento: { err1: "Documento incorrecto", err2: "wer" }
        },
        vercobertura: {
            titulo: "¿Necesitás ayuda con tu cobertura Iké Mascotas?", leyenda: "Contacta a un asesor para hacer consultas o contratar un plan.",
            btn1: "Ver planes disponibles", btn2: "Contactar a un asesor de Iké", btn3: "Volver"
        },
        usuarioregistro: {
            titulo: "Creá tu cuenta", leyenda: "Ahora completá tus datos para crear tu cuenta.",
            lblNombre: "Tu nombre", lblNombre_ph: "Jose Perez", lblMail: "Tu mail", lblMail_ph: "Jose@gmail.com", lblCelu: "Tu celular", lblCelu_ph: "1142334586",
            lblClave1: "Creá tu contraseña", lblClave2: "Repeti tu contraseña",
            btn1: "Crear cuenta", btn2: "¿Qué incluye mi cobertura?", btn3: "Ingresar sin registrarme"
        },
        plandetalle: {
            titulo: "Plan Mascotas 110", leyenda: "Este plan incluye las siguientes prestaciones:",
            btn1: "Descargar póliza", btn2: "Ver todos los planes"
        },
        principal: {
            tituloCabecera: "Hola, Lucía", leyendaCabecera: "Bienvenida a Iké, tu asistencia de mascotas.", lblConsulta: "Tenés una consulta en 10 minutos", btnConsulta: "Ingresar", lblFlier: "Visitá al veterinario, sin moverte del sillón.",
            btnFlier: "Ingresar", carro1: [{ lbl: "Club Iké" }, { lbl: "Ecommerce" }, { lbl: "Agendar Alarma" }],
            carro2: [{ lbl: "" }, { lbl: "" }, { lbl: "" }], lblNovedades: "Novedades Iké",
            lblAyuda: "¿Necesitás ayuda?. Estamos para lo que necesites.", btnAyuda: "Solicitar asistencia"
        },
        pie: { inicio: "Inicio", mascota: "Mascotas", consulta: "Consultas", vacuna: "Vacunas", foto: "Fotos" },
        usuariodetalle: {
            titulo: "Tu perfil", leyenda: "Bienvenida/o a tu cuenta, encontrarás tu info personal y detalle de plan.",
            mascota: "Mascotas", consulta: "Consultas", vacuna: "Vacunas", informacion: "Tu información personal",
            lblNombre: "Tu nombre", lblNombre_ph: "Jose Perez", lblMail: "Tu mail", lblMail_ph: "Jose@gmail.com", lblCelu: "Tu celular", lblCelu_ph: "1142334586", btnClave: "Cambiar contraseña", btnEdit: "Guardar mis datos",
            btnCobertura: "¿Qué incluye mi cobertura?", btnDelete: "Eliminar esta cuenta", btnAsistencia: "Solicitar asistencia", lblAyuda: "¿Necesitás ayuda?. Estamos para lo que necesites."
        },
        mascota: { titulo: "Mis mascotas", leyenda: "Creá el perfil de tus mascotas y accedé a su historia clínica.", label: "Mis mascotas", btn: "Agregar mascota", raza: "Raza: ", edad: "Edad: ", consultas: " Consulta/s" },
        misconsultas: { titulo: "Mis consultas", leyenda: "Creá el perfil de tus mascotas y accedé a su historia clínica.", label: "Mis consultas", btn: "Agendar consulta", verDetalle: "Ver detalle: " },
        calendario: { titulo: "Calendario de Vacunas", leyenda: "Consultá el calendario y registrá las vacunas de tus mascotas.", btn: "Registrar vacuna", perro: "Perros", gato: "Gatos", verDetalle: "Ver detalle: " },
        fotogaleria: { titulo: "Mis fotos", leyenda: "Creá tu galería de fotos en Iké." },
        video: { conectando: "Conectando ..." },
        videocalificacion: {
            titulo: "Calificá la consulta", leyenda: "Calificando tus consultas nos ayudás a mejorar el servicio para vos y los que más querés!",
            calificaLbl: "¿Cómo calificarías la atención que acabas de recibir?", comentarioLbl: "Dejanos un comentario (opcional)",
            btn1: "Guardar calificación", btn2: "Ahora no"
        },
        videodetalle: {
            titulo: "Detalle de tu consulta", leyenda: "Acá vas a encontrar el expediente generado por el profesional.", expediente: "Expediente ",
            calificar: "¿Cómo estuvo tu consulta?", btn1: "Calificar", conclusion: "Conclusión", recomienda: "Se recomienda", detalle: "Detalle de consulta",
            paciente: "Paciente: ", motivo: "Motivo: ", fecha: "Fecha: ", hora: "Hora: ", sintoma: "Sintoma: "
        },
        clavemodificar: {
            titulo: "Cambiá tu contraseña", leyenda: "Modificá tu contraseña completando los siguientes campos..",
            clave1: "Ingresá tu nueva contraseña", clave2: "Repetí tu nueva contraseña", btn1: "Crear nueva contraseña",
            errorClave1: { err1: "Clave1 incorrecto", err2: "wer" },
            errorClave2: { err1: "Clave2 incorrecto", err2: "wer" }
        },
        clavemodificarmsg: { titulo: "¡Listo!", leyenda: "Tu contraseña ya fue modificada.", btn1: "Volver a mi perfil" },
        plancontrata: { titulo: "¡Contratá tu Plan Iké Mascotas!", leyenda: "Accedé a esta y otras funcionalidades contratando tu plan.", btn1: "Volver a mi perfilVer planes disponibles", btn2: "Contactar a un asesor de Iké", btn3: "Volver al inicio" },
        notificacion: { titulo: "Notificaciones" },
        vacuna: {
            titulo: "Registrá una vacuna", leyenda: "Completá los datos de la vacuna que le aplicaste a tu mascota.", mascota: "¿A cuál mascota vacunaste?",
            vacuna: "¿Qué vacuna le aplicaron?", fecha: "¿Cuándo se la dieron?", btn1: "Registrar vacuna"
        },
        vacunamsg: { titulo: "¡Listo!", leyenda: "Tu consulta fue agendada con éxito", btn1: "Ir a Mis Consultas", btn2: "Volver al inicio" },
        mascotaalta: {
            titulo: "Agregá tu mascota", leyenda: "Completá los datos de tu mascota para disfrutar de tu cobertura.", mascota: "¿Qué animal es?",
            nombre: "¿Cómo se llama?", nombre_ph: "Coquito", fecha: "¿Cuándo nació?", raza: "¿De qué raza es?", btn1: "Agregar foto", btn2: "Agregar mascota",
            btnCamara: "Camara", btnImagen: "Libreria de Fotos", btnCancelar: "Cancelar"
        },
        mascotaedit: {
            titulo: "Editar perfil", leyenda: "Editá al perfil de tus mascotas y mantené sus datos actualizados.", mascota: "¿Qué animal es?",
            nombre: "¿Cómo se llama?", nombre_ph: "Coquito", fecha: "¿Cuándo nació?", raza: "¿De qué raza es?", btn1: "Editar foto", btn2: "Actualizar perfil",
            btnCamara: "Camara", btnImagen: "Libreria de Fotos", btnCancelar: "Cancelar"
        },
        mascotaaltamsg: { titulo: "¡Listo!", leyenda: "Tu mascota fue agregada con éxito", btn1: "Ver perfil", btn2: "Volver al inicio" },
        mascotaver: {
            leyenda: "Ingresá al perfil de tus mascotas y accedé a su historia clínica.", informacion: "Información",
            tipo: "Tipo de mascota: ", nombre: "Coquito", edad: "Edad: ", raza: "Raza: ", btn1: "Editar información", consulta: "Consultas",
            btn2: "Agendar nueva consulta", vacuna: "Vacunas registradas", btn3: "Registrar nueva vacuna"
        },
        consulta: {
            titulo: "Agendá una consulta", leyenda: "Completá los datos de tu mascota y sus síntomas.", btn1: "Adjuntar un archivo", btn2: "Seleccionar fecha y hora",
            para: "¿Para qué mascota es la consulta?", motivo: "¿Cuál es el motivo de la consulta?",
            sintoma: "¿Qué síntomas tiene? (opcional)"
        },
        consultaturnos: {
            titulo: "Agendá una consulta", leyenda: "Ahora seleccioná un día y horario para la consulta.",
            proximo: "Próximos turnos disponibles", btn1: "Confirmar turno"
        },
        consultadetalle: {
            titulo: "Agendá una consulta", leyenda: "Confirmá los datos para agendar tu consulta.", detalle: "Detalle de consulta",
            expediente: "Expediente ", paciente: "Paciente: ", motivo: "Motivo: ", fecha: "Fecha: ", hora: "Hora: ",
            sintoma: "Sintoma: ", btn1: "Confirmar consulta"
        },
        consultadetallemsg: { titulo: "¡Listo!", leyenda: "Tu consulta fue agendada con éxito", btn1: "Ir a Mis Consultas", btn2: "Volver al inicio" },
    }
}

