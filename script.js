function clicar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.querySelector("#txtano")
    let res = document.querySelector(".res")

    if(fAno.value.length == 0 || fAno.value <= 1900){
        window.alert("Ops, algo deu errado...")
    }
    else{
        let fSex = document.getElementsByName("radsex")
        let idade = ano - Number(fAno.value)
        let genero = ""
        // criando um atribuo no js
        let img = document.createElement("img")
        img.setAttribute("class", "foto")

        // indentificar sexo  M|F  
        if(fSex[0].checked){
            genero = "Homem"
            // indentificar idade
            if(idade >= 0 && idade < 5){
                img.setAttribute("src", "bebeM.jpeg")
                res.innerHTML = `Detectamos um bebe masculino com ${idade} anos!`
            }else if(idade <12){
                img.setAttribute("src", "criancaM.jpeg")               
                res.innerHTML = `Detectamos uma criança masculina com ${idade} anos!`
            }else if(idade < 20){
                img.setAttribute("src", "adolecenteM.jpeg")
                res.innerHTML = `Detectamos um adolecente masculino com ${idade} anos!`
            }else if(idade < 50){
                img.setAttribute("src","adultoM.jpeg")
                res.innerHTML = `Detectamos um adulto masculino com ${idade} anos!`
            }else{
                img.setAttribute("src","idosoM.jpeg")
                res.innerHTML = `Detectamos um senhor com ${idade} anos!`
            }
        }else if(fSex[1].checked){
            genero = "Mulher"
            //identificar idade
            if(idade >= 0 && idade < 5){
                img.setAttribute("src","bebeF.jpeg")
                res.innerHTML = `Detectamos um bebe feminino com ${idade} anos!`
            }else if(idade < 12){
                img.setAttribute("src", "criançaF.jpeg")
                res.innerHTML = `Detectamos uma criança feminina com ${idade} anos!`
            }else if(idade < 20){
                img.setAttribute ("src","adolecenteF.jpeg")
                res.innerHTML = `Detectamos uma adolecente mulher com ${idade} anos!`
            }else if(idade < 50){
                img.setAttribute("src","adultoF.jpeg")
                res.innerHTML = `Detectamos uma adulta mulher com ${idade} anos!`
            }else{
                img.setAttribute("src","idosoF.jpeg")
                res.innerHTML = `Detectamos uma senhora com ${idade} anos!`
            }
        }
        res.style.textAlign = "center"
       // res.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}