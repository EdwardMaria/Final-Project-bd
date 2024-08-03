db.users.insertOne({
    username: "maria_garcia",
    email: "maria.garcia@universidad.edu",
    password: "contraseña_encriptada_123"
  })
  
  db.recover.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    token: "token_recuperacion_456",
    expiresAt: new Date("2024-08-03T23:59:59Z")
  })
  
  db.levels.insertOne({
    name: "Estudiante de Primer Año",
    description: "Nivel para estudiantes recién ingresados a la universidad"
  })
  
  db.countries.insertOne({
    name: "México",
    code: "MX"
  })
  
  db.status.insertOne({
    name: "Estudiante Activo",
    description: "Estudiante matriculado en el semestre actual"
  })
  
  db.profiles.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    fullName: "María García",
    bio: "Estudiante de Ingeniería Informática, apasionada por la IA",
    dateOfBirth: new Date("2002-05-15")
  })
  
  db.albums.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    name: "Proyecto Final de Programación",
    description: "Capturas de pantalla de mi proyecto final"
  })
  
  db.images.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    url: "https://universidad.edu/proyectos/maria_garcia_001.jpg",
    description: "Diagrama de clases del proyecto",
    albumId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e75")
  })
  
  db.posts.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    content: "¡Acabo de terminar mi proyecto final de Bases de Datos!",
    createdAt: new Date()
  })
  
  db.postImages.insertOne({
    postId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e77"),
    imageId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e76")
  })
  
  db.hearts.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    targetId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e77"),
    targetType: "post"
  })
  
  db.comments.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e82"),
    targetId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e77"),
    targetType: "post",
    content: "¡Felicidades! ¿Usaste MongoDB para el proyecto?",
    createdAt: new Date()
  })
  
  db.conversations.insertOne({
    participants: [
      ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
      ObjectId("5f8a7b2b9d3e2a1b3c4d5e82")
    ]
  })
  
  db.messages.insertOne({
    conversationId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e81"),
    senderId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    content: "Hola, ¿tienes los apuntes de la clase de ayer?",
    createdAt: new Date()
  })
  
  db.notifications.insertOne({
    userId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
    type: "recordatorio",
    content: "Recuerda entregar el informe de laboratorio mañana",
    createdAt: new Date(),
    read: false
  })
  
  db.teams.insertOne({
    name: "Equipo de Proyecto Integrador",
    description: "Equipo para el proyecto final de Ingeniería de Software",
    members: [
      ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
      ObjectId("5f8a7b2b9d3e2a1b3c4d5e82")
    ]
  })
  
  db.offers.insertOne({
    title: "Pasantía de Verano en Desarrollo Web",
    description: "Buscamos estudiantes de Informática para pasantía de verano",
    companyId: ObjectId("5f8a7b2b9d3e2a1b3c4d5e87"),
    salary: 5000,
    location: "Ciudad Universitaria, México"
  })
  
  db.networking.insertOne({
    name: "Club de Programación UNAM",
    description: "Grupo para compartir conocimientos y oportunidades en programación",
    members: [
      ObjectId("5f8a7b2b9d3e2a1b3c4d5e6f"),
      ObjectId("5f8a7b2b9d3e2a1b3c4d5e82")
    ]
  })