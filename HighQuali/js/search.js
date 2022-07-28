const myInput = document.getElementById('search_input');
const table = document.getElementById('name_table');
const cells = table.getElementsByTagName('td');
const cellArr = [...cells];

Filter_table = (val) => {
  cellArr.forEach(c => {
    c.style.display = 'none';

    if (c.innerText.toLowerCase() === val.toLowerCase()) {
      c.style.display = 'table-cell';
    }
  })
};

// // All Columns search script
// function Filter_table() {

//   // Count td if you want to search on all table instead of specific column

//   count = $('.wrapper_all .name-table').children('tbody').children('tr:first-child').children('td').length;

//   // Declare variables
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("search_input");
//   filter = input.value.toLowerCase();

//   table = document.getElementById("name_table");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 1; i < tr.length; i++) {

//     var flag = 0;
//     for (j = 0; j < count; j++) {
//       td = tr[i].getElementsByTagName("td")[j];
//       if (td) {
//         var td_text = td.innerHTML;
//         if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
//           //var td_text = td.innerHTML;  
//           //td.innerHTML = 'shaban';
//           flag = 1;
//         } else {

//         }
//       }
//     }
//     if (flag == 1) {
//       tr[i].style.display = "";
//     } else {
//       tr[i].style.display = "none";
//     }
//   }
// }