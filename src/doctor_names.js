export class DoctorByName {
  getDoctorsByName(name) {
    let apiKey = process.env.API_KEY;
    let searchName = name;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=' + searchName + '&location=45.512%2C-122.658%2C100&user_location=45.512%2C-122.658&skip=0&limit=10&user_key=' + apiKey;
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
