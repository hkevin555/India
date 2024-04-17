function main() {
  // data for each form field
  data = ["hkevin@hotmail.com",
    "(256)-999-9999",
    "Kevin Hernandez",
    "1234 Duck Ave Florence, AL 35631",
    "0",
    "9",
    "0",
    "loved it would definitley come back again",
    "1"]
    
  jquery_functions(data);
}

//run program
main();

//jquery functions
function jquery_functions(text){
  $( document ).ready(function() {
    clear_button();
    set_html(text);
    get_selection();
  });
}

// used to clear the contents of each input field when the clear button is pressed
function clear_button(){
  $( "#clear" ).on( "click", function() {
    $('.to_empty').val('');
    $('.to_uncheck').prop('checked', false);
    $('#overview').empty();
    $("#message").empty();
  });
}

// used to set the contents the data as values to specefic fields
function set_html(text){
  $( "#set" ).on( "click", function() {
    set_option(text[4]);
    $('#email').val(text[0]);
    $('#phone').val(text[1]);
    $('#name').val(text[2]);
    $('#address').val(text[3]);
    $('#hear').val(text[4]);
    $(`.selected`).val(text[5])

    $( ".visit" ).each(function() {
      if ($(this).val() == text[6]){
        $(this).prop('checked', true);
      }
    });

    $('#comment').val(text[7]);

    if(text[8] == 1){
      $('#send_email').prop('checked', true);
    }
    else {
      $('#send_email').prop('checked', false);
    }
    
  });
}

// chooses a value for the selection menu and set the option accordingly
function get_selection(){
  $( "#hear" ).change( function() {
    set_option($(this).val());
  });
}

// used to decide what goes underneath the selection based on a value that is passed in
function set_option(val){
  $("#message").empty();
  let message = "";
  if(val == 0){
    message = `<label for="points">How often do you use google on a scale of 1-10: </label>\
    <input type="number" class = "selected" name="google" min="1" max="10">`;
  } else if (val == 1) {
    message = `<label for="friend_name">What's your friend's name: </label>\
    <input type="text" class = "selected" name="friend_name" size="30" maxlength="100">`;
  } else if (val == 2) {
    message = message = `<label for="hear_about">How did you hear about us: </label><br>\
    <textarea rows="4" cols="40" class = "selected" class = "to_empty" id="comment"></textarea>`;
  } else {
    return;
  }
  $("#message").append(message);
}

// called when the form is submitted, adds overview 
function submitForm(){
  $('#overview').empty();
  html = `<fieldset>\
          <legend>Overview</legend>\
          <p>Thank You ${$('#name').val()} for your feedback</p>\
          <p>We will reach you at ${$('#email').val()} or ${$('#phone').val()} if we have any concerns</p>`;
  $("#overview").append(html); 
}
