$(".ok").click(function (e) {
  e.preventDefault();
  // debugger
  var name = $("input[name='name']").val();
  $('#name').val('');


  $(".data-table tbody").append("<tr data-name='" + name +  "'><td>" + name + "</td><td><button class='btn btn-info btn-xs btn-done'>Done</button><button class='btn btn-info btn-xs btn-notdone'>NotDone</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td><td id='tick'></td></tr>");

 
});

$("body").on("click", ".btn-done", function () {
  // var name = $(this).parents("tr").attr('data-name');
  

  $(this).parents().siblings('#tick').html('');
  $(this).parents().siblings('#tick').html('&#9989;');

  
});

$("body").on("click", ".btn-notdone", function () {
  // var name = $(this).parents("tr").attr('data-name');
  $(this).parents().siblings('#tick').html('');
  $(this).parents().siblings('#tick').html('&#x274C;');
  $("body").on("click", ".btn-delete", function () {
  if($('.data-table tr').length>2 && $(this).parent().siblings('#tick').html()=='❌'){
    $(this).parent().parent('tr').remove();
  }
  });

});

