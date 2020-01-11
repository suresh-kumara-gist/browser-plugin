document.body.style.border = "5px solid red";

// $("#table2excel").table2excel({
//   exclude: ".noExl",
//   name: "Worksheet Name",
//   filename: "SomeFile",
//   fileext: ".xls",
//   exclude_img: true,
//   exclude_links: true,
//   exclude_inputs: true
// });

$("button").click(function(){
  $("#table2excel").table2excel({
    // exclude CSS class
//    exclude: ".noExl",
    name: "Worksheet Name",
    filename: "SomeFile", //do not include extension
    fileext: ".xls" // file extension
  });
});
