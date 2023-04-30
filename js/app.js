const pintarCards = async () => {
    const data = await getNovedades(); 
     const contenedor = document.querySelector('#novedades-contenedor')

     data.forEach( novedad => {
        const div = document.createElement('div')
        div.className = 'card mb-3'
        div.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                        <h2 class="card-title">${novedad.titulo}</h2>
                        <p class="card-text"><small class="text-muted">${novedad.fecha}</small></p>
                        </div>
                </div>
                    <div class="col-md-4">
                        <img src="${novedad.img}" class="img-fluid rounded-start" alt="${novedad.alt}">
                    </div>
                </div>
        `

        contenedor.appendChild(div)
     })
 };

 pintarCards()

