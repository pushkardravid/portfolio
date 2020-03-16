var contact_body = `<div>
  <strong>Email:</strong> psdravid@ncsu.edu <br>
  <strong>Phone:</strong> +1 984-444-1016 <br>
  <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/pushkardravid/" target="_blank">Pushkar's LinkedIn</a> <br>
</div>`;

var resume_download = `<a href="https://drive.google.com/file/d/1BEnz3vDoiFoZd1iKDZlUgfekl3N8zG6C/view?usp=sharing" target="_blank">Pushkar's resume</a>`;

var achievements_body = `<div>Asd</div>`;

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

function addHelp(){
  

  var body = `<div>
      Commands <br>
      <table>
          <tr>
              <td>&#x270e education</td>
              <td>Education bro</td>
          </tr>
          <tr>
              <td>&#9832; skills</td>
              <td>Education bro</td>
          </tr>
          <tr>
              <td>&#x262E experience</td>
              <td>Education bro</td>
          </tr>
          <tr>
              <td>&#9885; projects</td>
              <td>Education bro</td>
          </tr>
          <tr>
              <td>&#8473; achievements</td>
              <td>Modest? not</td>
          </tr>
          <tr>
              <td>&#9742; contact</td>
              <td>Them contact details.</td>
          </tr>
          <tr>
              <td>&#128464 resume</td>
              <td>Download a copy of my resume.</td>
          </tr>
      </table>
  </div>`;
  $("#terminal").append(body);
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
        addMessage("education  skills  experience  projects  achievements  contact  resume");
        break;
        case "man portfolio":
          addHelp();
          break;
        case "contact":
          addMessage(contact_body);
          break;
        case "resume":
          addMessage(resume_download);
          break;
        case "achievements":
          addMessage(achievements_body);
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