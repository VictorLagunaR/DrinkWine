export default function imageRequire(tipo) {
    let imagem;
    switch (tipo) {
      case "Rosé":
        imagem = require("../images/uvaRose.png");
        break;
      case "Branco":
        imagem = require("../images/uvaBranco.png");
        break;
      case "Licoroso":
        imagem = require("../images/uvaLicor.png");
        break;
      default:
        imagem = require("../images/uvaTinto.png");
        break;
    }
  
    return imagem
  
  }