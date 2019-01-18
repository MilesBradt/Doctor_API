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
      console.log(body.data[i].profile);
    }
  });

});
