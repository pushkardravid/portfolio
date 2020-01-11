function addInput(id){
  var $input = $("<input>", {id: "input_" + id});
  $("#terminal").append("~$ ")
  $("#terminal").append($input);
  $("#terminal").append("<br>");
  $("#input_" + id).focus();
}

function addMessage(message){
  $("#terminal").append(message + "<br>");
}

$(function() {
    addInput(1);
});


$(document).on('keypress',function(e) {
  var activeElement = document.activeElement;
  if(activeElement.tagName !="INPUT"){
    return;
  }
  if(e.which == 13) {
      var inputCommand = activeElement.value;
      if(inputCommand == "clear"){
        $("#terminal").empty();
        addInput(1);
        return;
      }
      new_id = parseInt(activeElement.id.split("input_")[1]) + 1;
      console.log(new_id);
      switch (inputCommand) {
      case "ls":
        addMessage("education  skills  experience  projects  achievements  contact  download");
        break;
        case "man portfolio":
          addMessage("portfolio");
          break;
        case "education":
          addMessage("education");
          break;
        case "skills":
          addMessage("skills");
          break;
        case "experience":
          addMessage("experience");
          break;
        case "projects":
          addMessage("projects");
          break;
        default:
          addMessage("command not found: " + inputCommand);
      }
      addInput(new_id);

  }
});
