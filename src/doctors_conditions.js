export class DoctorConditions {
  getDoctorsForCondition(symptom) {
    let apiKey = exports.apiKey;
    let userSymptom = symptom;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + userSymptom + '&location=45.512%2C-122.658%2C100&user_location=45.512%2C-122.658&skip=0&limit=10&user_key=4a9d02a663b191206be1f400d948e89c' + apiKey;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
