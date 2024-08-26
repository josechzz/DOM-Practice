const app = document.getElementById('app')

const suscriptores=[]

app.innerHTML = 
`<!-- SLIDER -->
    <section class="slider">
        <h1>Bienvenid@</h1>
        <img class="slider-img" src="https://www.rover.com/blog/wp-content/uploads/2018/11/golden-retriever-2061715_1920.jpg" alt="imagen-perrito">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        
    </section>

    <!-- NAVBAR -->
    <nav class="navbar">

        <img src="https://media.istockphoto.com/id/931785704/vector/paw_print.jpg?s=612x612&w=0&k=20&c=CXBPHlf7XHdJiiOULJrI9nGZjVNAj7cqnkM_eDyDdCU=" alt="paw-icon">

        <ul>
            <li>Comprar</li>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
        </ul>

    </nav>

    <!-- SUBSCRIBIRSE -->
    <section class="subscribe">
        <h2>¡Subscríbete para obtener las mejores ofertas!</h2>

        <form class="subscribe-form" action="">
            <label for="Name">Nombre:</label>
            <input type="text" id="nombre" placeholder="Escribe tu nombre">

            <label for="Email">Email:</label>
            <input type="email" id="email" placeholder="Correo Electronico">

            <input type="submit" id="submit" value="Enviar">
        </form>
    </section>`

    const addSubs = (event)=>{
        event.preventDefault()
        console.log('formulario enviado')
         const nombre= document.getElementById('nombre').value
         const email= document.getElementById('email').value

         const subs={
            nombre: nombre,
            email: email
          }
          suscriptores.push(subs)
          console.log(suscriptores)
    }

    document.querySelector('.subscribe-form').addEventListener('submit', addSubs)
