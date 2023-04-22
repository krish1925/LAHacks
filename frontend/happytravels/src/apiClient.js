import axios from "axios";


class apiClient{

  getMapSuggestions(input){
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    var config = {
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=' + input + '&language=en&key=AIzaSyArq3VutVvfi5-ECgS0iRogWZVJZXjSTM4',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }


}

export default new apiClient