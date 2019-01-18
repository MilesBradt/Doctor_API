export class DoctorConditions {
  getDoctorsForCondition() {
    return new Promise(function(resolve, reject) {
      let apiKey = exports.apiKey;
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/conditions?user_key=' + apiKey;
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
