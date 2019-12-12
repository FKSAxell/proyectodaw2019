import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  constructor() { 
   this.iniciarlizarCarrera()
  }
  
  ngOnInit() {
   
  }

  iniciarlizarCarrera(){
     fetch('https://api.myjson.com/bins/kojfg')
    .then( respuesta => respuesta.json())
    .then( data => {
      let arreglo = data.Carreras;
      for (let objeto of arreglo) {
        let carrera= objeto["carrera"]
        let codigo= objeto["codigo"]
        let img= objeto["img"]
        let divPadre=document.createElement("div")
        let enlace=document.createElement("a")
        let divHijo=document.createElement("div")
        let imgE=document.createElement("img")
        let h6=document.createElement("h6")
        let txt = document.createTextNode(carrera.toUpperCase( ))
        h6.appendChild(txt)
        h6.setAttribute("class","h6 mb-2")
        imgE.setAttribute("src",img)
        imgE.setAttribute("width","80")
        imgE.setAttribute("height","80")
        divHijo.appendChild(imgE)
        divHijo.appendChild(h6)
        divHijo.setAttribute("class","mt-5")
        enlace.setAttribute("href",codigo)
        enlace.setAttribute("id","none")
        enlace.setAttribute("class","js-scroll-trigger")
        enlace.appendChild(divHijo)
        divPadre.appendChild(enlace)
        divPadre.setAttribute("class","col-lg-2 col-md-6 text-center")
        divPadre.setAttribute("id","img1")      
        let container= document.getElementsByClassName("row h-50 align-items-center justify-content-center text-center ")[0]
        container.appendChild(divPadre)
      }
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }

  inicializarMaterias(){
    fetch('https://api.myjson.com/bins/kojfg')
    .then( respuesta => respuesta.json())
    .then( data => {
      let arreglo = data.Carreras;
      for (let objeto of arreglo) {
        let carrera= objeto["carrera"]
        let codigo= objeto["codigo"]
        let materias= objeto["materias"]

        let section=document.createElement("section")
        let divCon,divCol12,divRow,divCol122=document.createElement("div")
        let hr =document.createElement("hr")
        let p =document.createElement("p")
        let ul=document.createElement("ul")
        for(let dato of materias){
          let materia = dato["materia"]
          let tag =dato["tag"]

          let li=document.createElement("li")
          li.setAttribute("class","navbar-nav ml-auto my-2 col-lg-6")
          let a=document.createElement("a")
          a.setAttribute("class","btn btn-link")
          a.setAttribute("href",materia)
          let txt = document.createTextNode(materia)
          a.appendChild(txt)
        
          li.appendChild(a)
          ul.appendChild(li)

        }
        


      }
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

  }
}