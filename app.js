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
<h4 style="margin-bottom:0px;">NLP - Entity Recognition for medical reports</h4>
<i>Technology Stack: Python, AWS Lambda, Spacy, DocumentDB</i>
<ul>
<li>Created data pipeline to process patient data from unstructured medical reports for life insurance cases</li>
<li>The pipeline involved tagging of PII, medicinal information, and diseases which was further stored in a database; to be consumed by
medical reviewers for underwriting</li>
</ul>
</li>

<li>
<h4 style="margin-bottom:0px;">Backend Service - Drop Ticket Service</h4>
<i>Technology Stack: Java, SpringBoot, ACORD, Apigee, LibertyB</i>
<ul>
<li>Designed and developed REST service to enable third party Brokers to submit insurance business to the company</li>
<li>Introduced Test Driven Development for the project with code coverage of ~80% and created the integration test suite</li>
</ul>
</li>

<li>
<h4 style="margin-bottom:0px;">Machine Learning – Quick Quote</h4>
<i>Technology Stack: Python, NumPy, Pandas, Sklearn, NLTK</i>
<ul>
<li>Trained a machine learning classifier to predict risk class of potential customer based on their health parameters like tobacco
consumption, age, medical history</li>
<li>Created data pipeline to consume emails from mailbox, then extract features from them for training and validation</li>
</ul>
</li>

<li>
<h4 style="margin-bottom:0px;">Life Insurance Calculator</h4>
<i>Technology Stack: Java Spring, AngularJS, KarmaJS</i>
<ul>
<li>Trained a machine learning classifier to predict risk class of potential customer based on their health parameters like tobacco
consumption, age, medical history</li>
<li>Created data pipeline to consume emails from mailbox, then extract features from them for training and validation</li>
</ul>
</li>

<li>
<h4 style="margin-bottom:0px;">Datamart for Advisors</h4>
<i>Technology Stack: AWS Lambda, Python, Mulesoft</i>
<ul>
<li>Developed data pipeline for management of Advisor Hierarchy using Mulesoft and AWS services</li>
<li>Designed datastore to serve as the single source of truth of advisor hierarchy across organization and it is further consumed by
business leaders for reporting and insights and other reporting systems</li>
</ul>
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