export default ({
  yourname,
  email,
  phone,
  comments,
}: {
  yourname: string;
  email: string;
  phone: string | undefined;
  comments: string;
}) => ({
  from: "pianos@enriquearzamendi.com",
  to: "pianos@enriquearzamendi.com",
  emailAccount: "pianos app",
  origin: email,
  subject: "Formulario",
  html: `<head>
          <title>message</title>
          <style>
          body {
          background-color: rgb(245,245,245);
          padding: 60px;
          }
          main {
          background-color: white;
          padding: 45px;
          }
          </style>
        </head>
        <body>

          <main>

          <p><strong>Información enviada</strong></p>
          <hr>

          <h4>Nombre:</h4>
          <p>${yourname}</p><br>

          <h4>Correo electrónico:</h4>
          <p>${email}</p><br>

          <h4>Número de teléfono:</h4>
          <p>${phone}</p><br>

          <h4>Consulta o comentario:</h4>
          <p>${comments}</p>

          </main>
        </body>`,
});
