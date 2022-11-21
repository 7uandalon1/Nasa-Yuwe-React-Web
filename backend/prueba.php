<?php
/**
 * Funcion que muestra la estructura de carpetas a partir de la ruta dada.
 */

function obtener_estructura_directorios($ruta){
    // Se comprueba que realmente sea la ruta de un directorio
    if (is_dir($ruta)){
        // Abre un gestor de directorios para la ruta indicada
        $gestor = opendir($ruta);
        echo "<ul>";

        // Recorre todos los elementos del directorio
        while (($archivo = readdir($gestor)) !== false)  {
                
            $ruta_completa = $ruta . "/" . $archivo;

            // Se muestran todos los archivos y carpetas excepto "." y ".."
            if ($archivo != "." && $archivo != "..") {
                // Si es un directorio se recorre recursivamente
                if (is_dir($ruta_completa)) {
                    echo ('
                  <SwiperSlide>
                    <img
                      className="slider"
                      src={require('. $ruta_completa . ')}
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>');
                    obtener_estructura_directorios($ruta_completa);
                } else {
                    echo ('
                  <SwiperSlide>
                    <img
                      className="slider"
                      src={require("'. $ruta_completa . '")}
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>');
                }
            }
        }    
        
        // Cierra el gestor de directorios
        closedir($gestor);
        echo "</ul>";
    } 
    else {
        echo "No es una ruta de directorio valida<br/>";
    }
}
obtener_estructura_directorios("../src/Fragments/assets/img/servicios/alojamiento_rural/")
?>