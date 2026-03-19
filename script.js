console.log("Meu Portfólio está interativo!");

const botao = document.querySelector("#btnProjeto");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

let visivel = false; // controla se está mostrando ou não

botao.addEventListener("click", () => {

   if (!visivel) {
      //MOSTRAR
      img1.style.display = "inline-block";
      img2.style.display = "inline-block";
      img3.style.display = "inline-block";

      setTimeout(() => {
         img1.style.opacity = "1";
         img2.style.opacity = "1";
         img3.style.opacity = "1";
      }, 100);

      visivel = true;

   } else {
      //ESCONDER
         img1.style.opacity = "0";
         img2.style.opacity = "0";
         img3.style.opacity = "0";
         setTimeout(() => {
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "none";
        }, 100); // tempo igual ao transition

        visivel = false;
   }

});
/*
    foto2.style.display = "inline-block";
    foto2.style.width ="50px";
    foto2.style.height ="50px";
    foto2.style.objectFit = "cover";
    setTimeout(() => {
       foto2.style.opacity = "1"; 
    }, 100);

    foto.style.display = "inline-block";
    foto.style.width ="50px";
    foto.style.height ="50px";
    foto.style.objectFit = "cover";
    setTimeout(() => {
       foto.style.opacity = "1"; 
    }, 100);
});
*/