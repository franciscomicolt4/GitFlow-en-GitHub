function exportarReporteADrive() {
  // 1. Crear contenido del reporte (podría venir de un formulario, base de datos, etc.)
  var contenido = "Este es un reporte de ejemplo\nFecha: " + new Date();
  
  // 2. Crear el archivo en Google Drive
  var archivo = DriveApp.createFile("Reporte-Ejemplo.txt", contenido, MimeType.PLAIN_TEXT);
  
  // 3. Confirmación
  Logger.log("Reporte exportado a Drive con ID: " + archivo.getId());
  Logger.log("URL: " + archivo.getUrl());
}
