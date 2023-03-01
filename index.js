let url='https://randomuser.me/api/'
        fetch(url)
        .then(response => response.json())
        .then (data => mostrarData(data))
        .catch(error => console.log(error))

        const mostrarData = (data) => {
            console.log(data)
            let name = ''; let img = '' 
            name = `
            
            <h5 class="date" style="margin: 6px;" >Nombre : ${data.results[0].name.first}</h5>
            <h5 class="date" style="margin: 6px;" >Apellido : ${data.results[0].name.last}</h5>
            <h5 class="date" style="margin: 6px;" >Edad : ${data.results[0].dob.age}</h5>
            <h5 class="date" style="margin: 6px;" >Telefono : ${data.results[0].phone}</h5>
            <h5 class="date" style="margin: 6px;" >E-mail : ${data.results[0].email}</h5>
            
            `
            document.getElementById('dataname').innerHTML = name
            img = ` <img src="${data.results[0].picture.large}" alt="img"></img>`
            
            document.getElementById('image').innerHTML = img
        } 

        function imprim1(imp1){
            var printContents = document.getElementById('imp1').innerHTML;
                    w = window.open();
                    w.document.write(printContents);
                    w.document.close(); // necessary for IE >= 10
                    w.focus(); // necessary for IE >= 10
                    w.print();
                    w.close();
        return true;}