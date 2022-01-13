// https://api.jquery.com/jQuery.ajax
$("#submit").click(function(){
  let data = {
    name : $("#name").val(),
    email : $("#email").val(),
    tel : $("#tel").val(),
    site : $("#site").val(),
    message : $("#message").val(),
  }

  $.ajax({
      method: 'POST',
      url: 'https://formsubmit.co/ajax/73e9c3c2042d658f608dc4013306ebbe',
      dataType: 'json',
      accepts: 'application/json',
      data: data,
      success: (data) => {
        console.log(data)
        if(data.success == "true"){
          $("#form").css("display","none");
          $("#email_fail").css("display","none");
          $("#email_succes").css("display","");
        }
        else{
          $("#form").css("display","none");
          $("#email_fail").css("display","");
          $("#email_succes").css("display","none");
        }
      },
      error: (err) => console.log(err)
  });
});
