console.log("Meu Portfólio está interativo!");


//conecta as constantes lá do HTML ao JavaScript aqui, nesse caso são os botões, as imagens e o texto extra na parte 'sobre mim'.
const botao1 = document.querySelector("#btnSobre");
const txtsobre = document.querySelector("#maissobre");
const botao2 = document.querySelector("#btnProjeto");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

let visivelSobre = false; // faz o controle da visibilidade das imagens e textos da parte 'sobre mim'
let visivelProjeto = false; // faz o controle da visibilidade das imagens da parte 'projeto'

//addEventListener("click", () =>   isso faz com que ao clicar no determinado botão ele fará o que foi programado a fazer, neste caso esconder e mostrar o texto.
botao1.addEventListener("click", () => {
   if (!visivelSobre) {
      //mostrar
      txtsobre.style.display = "flex";

      setTimeout(() => {
         txtsobre.style.opacity = "1";
      }, 100);

      visivelSobre = true;

   } else {
      //esconder
       txtsobre.style.opacity = "0";
       setTimeout(() => {
                txtsobre.style.display = "none";
       }, 100);

       visivelSobre = false;
   }

});

//addEventListener("click", () =>   isso faz com que ao clicar no determinado botão ele fará o que foi programado a fazer, neste caso esconder e mostrar as imagens.
botao2.addEventListener("click", () => {

   if (!visivelProjeto) {
      //MOSTRAR
      img1.style.display = "inline-block";
      img2.style.display = "inline-block";
      img3.style.display = "inline-block";
      img4.style.display = "inline-block";

      setTimeout(() => {
         img1.style.opacity = "1";
         img2.style.opacity = "1";
         img3.style.opacity = "1";
         img4.style.opacity = "1";
      }, 100);

      visivelProjeto = true;

   } else {
      //ESCONDER
         img1.style.opacity = "0";
         img2.style.opacity = "0";
         img3.style.opacity = "0";
         img4.style.opacity = "0";
         setTimeout(() => {
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "none";
            img4.style.display = "none";
        }, 100); // tempo igual ao de transição

        visivelProjeto = false;
   }

});