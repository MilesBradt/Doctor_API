import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorConditions } from './doctors_conditions.js';
import { DoctorByName } from './doctor_names.js';


$(document).ready(function() {
  $("#buttonSubmitSymptom").click(function() {
    document.getElementById("output").innerHTML = '';
    let search = $("input#userSearchSymptom").val();
    console.log(search);
    let doctorPromiseByCondition = new DoctorConditions();
    let doctorSearch = doctorPromiseByCondition.getDoctorsForCondition(search);
    doctorSearch.then(function(response) {
      let body = JSON.parse(response);

      if(body.data.length === 0) {
        $("#output").text("It appears your search results came up with nothing, make sure your spelling is correct or you entered a valid symptom")
      }

      for (let i = 0; i < body.data.length; i++) {

        $("#output").append("<li>" + "Name: " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + "Address: " + body.data[i].practices[0].name + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + " " + body.data[i].practices[0].visit_address.zip + "<br>" + "Number: " + body.data[i].practices[0].phones[0].number + "<br>" + "Accepting new patients? " + body.data[i].practices[0].accepts_new_patients + "</li>")

      }
    });
  });

  $("#buttonSubmitName").click(function() {
    document.getElementById("output").innerHTML = '';
    let search = $("input#userSearchName").val();
    let doctorPromiseByName = new DoctorByName();
    let doctorSearchName = doctorPromiseByName.getDoctorsByName(search);

    doctorSearchName.then(function(response) {
      let body = JSON.parse(response);

      if(body.data.length === 0) {
        $("#output").text("It appears your search results came up with nothing, make sure your spelling is correct or you entered a valid name")
      }

      for (let i = 0; i < body.data.length; i++) {

        $("#output").append("<li>" + "Name: " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + "Address: " + body.data[i].practices[0].name + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + " " + body.data[i].practices[0].visit_address.zip + "<br>" + "Number: " + body.data[i].practices[0].phones[0].number + "<br>" + "Accepting new patients? " + body.data[i].practices[0].accepts_new_patients + "</li>")

      }
    });
  });

});
