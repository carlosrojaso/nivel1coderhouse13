// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  nisum: require("../assets/nisum.png"),
  proinchile: require("../assets/proinchile.png"),
  logo: require("../assets/logo.jpg"),
  coderhouse: require("../assets/coderhouse.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Clase 13: Diseñador WEB
            </Heading>            
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Accesibilidad
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Proporcione alternativas equivalentes para el contenido visual y auditivo.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">No se base sólo en el color.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utilice marcadores y hojas de estilo y hágalo apropiadamente.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Identifique el idioma usado.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Cree tablas que se transformen correctamente.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Asegúrese de que las páginas que incorporen nuevas tecnologías se transformen correctamente.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Asegure al usuario el control sobre los cambios de los contenidos tempo-dependientes.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Asegure la accesibilidad directa de las interfaces incrustadas.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Diseñe para la independencia del dispositivo.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utilice las tecnologías y pautas W3C.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Proporcione información de contexto y orientación.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Proporcione mecanismos claros de navegación.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Asegúrese de que los documentos sean claros y simples.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Elementos
            </Heading>
          </Slide>
           <Slide>
            <Text textSize="40px" margin="0px">Imágenes y animaciones.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Mapas de imagen.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Multimedia.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Vínculos de hipertexto.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Organización de las páginas.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Figuras y diagramas.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Scripts, applets y plug-ins.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Marcos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Revisá tu trabajo.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Ejemplos
            </Heading>
          </Slide>  
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              SEO
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea títulos de página únicos y precisos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza la metaetiqueta description.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">URL sencillas sugieren el contenido de la página.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Las URL se muestran en los resultados de búsqueda.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza palabras en las URL.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea una estructura de directorios simple.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Proporciona una versión de la URL para llegar a un documento.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Facilita la navegación en tu sitio.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Planifica la navegación basándote en la página de inicio.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Asegúrate de utilizar los enlaces de navegación.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Deja abierta la posibilidad de que una parte de la URL pueda ser eliminada.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea dos sitemaps: uno para los usuarios y otro para los motores de búsqueda.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Añade un mapa del sitio HTML al sitio web y usa un archivo sitemap XML.</Text>
            <Text textSize="40px" margin="0px">Planifica la navegación basándote en la página de inicio.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Optimiza el Contenido
            </Heading>
          </Slide> 
          <Slide>
            <Text textSize="40px" margin="0px">Ofrece contenido y servicios de calidad</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">Crea contenido único y original</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">Escribe textos ancla de mejor calidad</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">Optimiza el uso de las imágenes</Text>
          </Slide>
          
          <Slide>
          <Text textSize="40px" margin="0px">Utiliza las etiquetas de cabecera de forma apropiada</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">Haz un uso efectivo del robots.txt</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">Ten en cuenta rel=“nofollow” para los enlaces</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">SEO para teléfonos móviles</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">Guía con precisión a los usuarios de móviles</Text>
          </Slide>
          <Slide>
          <Text textSize="40px" margin="0px">Promociona tu sitio de manera correcta</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Fundamentos web
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Dominios
            </Heading>
          </Slide> 
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Hosting
            </Heading>
          </Slide> 
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              FTP 
            </Heading>
          </Slide> 
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Tips para un programador web 
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Navegadores
            </Heading>
          </Slide> 
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Validación
            </Heading>
          </Slide> 
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Github Pages
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
