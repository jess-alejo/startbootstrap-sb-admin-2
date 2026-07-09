// Initialise simple-datatables on the demo table
document.addEventListener('DOMContentLoaded', function() {
  var table = document.getElementById('dataTable');
  if (table) {
    new simpleDatatables.DataTable(table);
  }
});
