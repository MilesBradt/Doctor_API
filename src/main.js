import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorConditions } from './doctors_conditions.js';
import { DoctorByName } from './doctor_names.js';


$(document).ready(function() {
  $("#buttonSubmit").click(function() {
    document.getElementById("output").innerHTML = '';
    let search = $("input#userSearch").val();
    console.log(search);
    let doctorPromiseByCondition = new DoctorConditions();
    let doctorSearch = doctorPromiseByCondition.getDoctorsForCondition(search);
    doctorSearch.then(function(response) {
      let body = JSON.parse(response);

      for (let i = 0; i < body.data.length; i++) {
        // phones.forEach(phone) {
        //   console.log(phone.number, phone.type)
        // }

        console.log(body.data[i]);
        $("#output").append("<li>" + "Name: " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + "Address: " + body.data[i].practices[0].name + ", " + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + " " + body.data[i].practices[0].visit_address.zip + "</li>")
        console.log(body.data[i].practices[0].name, body.data[i].practices[0].visit_address.city, body.data[i].practices[0].visit_address.state, body.data[i].practices[0].visit_address.street, body.data[i].practices[0].visit_address.street2, body.data[i].practices[0].visit_address.zip, body.data[i].practices[0].phones[0].number, body.data[i].practices[0].phones[0].type, body.data[i].practices[0].accepts_new_patients);
      }
    });
  });
  // let doctorPromiseByName = new DoctorByName();
  // let doctorSearchName = doctorPromiseByName.getDoctorsByName("Michael");
  //
  // doctorSearchName.then(function(response) {
  //   let body = JSON.parse(response);
  //
  //   for (let i = 0; i < body.data.length; i++) {
  //     console.log(body.data[i]);
  //     console.log("First Name:", body.data[i].profile.first_name, ",", "Last Name:", body.data[i].profile.last_name);
  //     console.log(body.data[i].practices[0].name, body.data[i].practices[0].visit_address.city, body.data[i].practices[0].visit_address.state, body.data[i].practices[0].visit_address.street, body.data[i].practices[0].visit_address.street2, body.data[i].practices[0].visit_address.zip, body.data[i].practices[0].phones[0].number, body.data[i].practices[0].phones[0].type, body.data[i].practices[0].accepts_new_patients);
  //     let phones = body.data[i].practices[0].phones
  //     console.log(phones);
  //     // for (let j = 0; i < phones.length; j++) {
  //
  //   }
  // });



});
