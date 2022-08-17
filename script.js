const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    Swal.fire({
        title: 'Libro agregado',
        imageUrl: 'https://img.icons8.com/color/100/000000/story-book.png',
        background: '#F3D6E5',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Guardado', 
            icon: 'success',
            background: '#FCE6F1',
        })
        } else if (result.isDenied) {
          Swal.fire({
            title: 'No se han guardado los cambios', 
            icon: 'info',
            background: '#FCE6F1',
        })
        }
      })
      form.reset()    
})
