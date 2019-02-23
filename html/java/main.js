const frågor = [   // gör en lista med frågor
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret
  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret
  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret
  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret
  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret

  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret

  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret

  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret

  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret

  },
  {
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret

  }
];
let antal_rätt = 0;// låter variabeln antal_rätt få 0 som startvärde
let fråga_nummer = 0; // fråga_nummer anger vilken fråga vi är på. startvärdet = 0


document.addEventListener("load", () => {  //DOMContentLoaded gör att våran skript inte starta förens sidan har laddat klart och föjs där efter funktionen ladda fråga
    ladda_fråga();
})
    function ladda_fråga(){ //funktion som ska ladda frågan
        let nuvarande_fråga = frågor[fråga_nummer] // här ser vi till att vi vet vilken fråga i listan som är aktuel och ger värdet till variabeln nuvarand_fråga

        document.getElementById(h3_fråga).innerHTML = nuvarande_fråga.frågan; // sätter in frågan i h3 med id h3_fråga
        // vad som händer när vi svarar
        btn_svara.onclick = function(){
        let ditt_svar = document.getElementById("svaret").innerHTML
        if (ditt_svar == frågor.svar) {
            antal_rätt++;
            fråga_nummer++;

            document.getElementById("rätt").innerHTML = antal_rätt;
            fråga_nummer >= frågor.length
                    ? spel_slut()
                    : ladda_fråga();


        }
        else {
            fråga_nummer++;
                    fråga_nummer >= frågor.length
                    ? spel_slut()
                    : ladda_fråga();
        }

        }


}

function spel_slut(){
    $("#quiz").hide();
    $("#").show();


}