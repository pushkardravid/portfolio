var contact_body = `<div>
  <strong>Email:</strong> psdravid@ncsu.edu <br>
  <strong>Phone:</strong> +1 984-444-1016 <br>
  <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/pushkardravid/" target="_blank">Pushkar's LinkedIn</a> <br>
</div>`;

var resume_download = `<a href="https://drive.google.com/file/d/1BEnz3vDoiFoZd1iKDZlUgfekl3N8zG6C/view?usp=sharing" target="_blank">Pushkar's resume</a>`;

var achievements_body = `<div>
<ul>
<li>1st place at LexisNexis Annual Hackathon 2019 conducted for students in the triangle area, NC</li>
<li>Winner at HackNC 2019 at UNC Chapel Hill among 250 teams conducted by MLH</li>
<li>Employee Excellence Award – Gold, at Principal Financial Group, Pune</li>
<li>Best project award for year in Shivaji University, Maharashtra, India sponsored by Tata Consultancy Services</li>
</ul>
</div>`;

var project_body = `
<div>
<ul>
<li>
<h4>NLP - Entity Recognition for medical reports</h4>
<i style="padding-top:0px;">Technology Stack: Python, AWS Lambda, Spacy, DocumentDB</i>
<p>asdsfsd</p>
</li>
</ul>
</div>
`;
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
          addMessage(project_body);
          break;
        default:
          addMessage("command not found: " + inputCommand);
      }
      addInput(new_id);

  }
});