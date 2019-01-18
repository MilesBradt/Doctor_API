import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorConditions } from './doctors_conditions.js';


$(document).ready(function() {
  let doctorPromiseAPI = new DoctorConditions();
  let doctorSearch = doctorPromiseAPI.getDoctorsForCondition("acne");
  doctorSearch.then(function(response) {
    let body = JSON.parse(response);

    for (let i = 0; i < body.data.length; i++) {
      console.log(body.data[i]);
      console.log("First Name:", body.data[i].profile.first_name, ",", "Last Name:", body.data[i].profile.last_name);
      console.log(body.data[i].practices[0].name, body.data[i].practices[0].visit_address.city, body.data[i].practices[0].visit_address.state, body.data[i].practices[0].visit_address.street, body.data[i].practices[0].visit_address.street2, body.data[i].practices[0].visit_address.zip, body.data[i].practices[0].phones[0].number, body.data[i].practices[0].phones[0].type, body.data[i].practices[0].accepts_new_patients);
    }
  });

});
