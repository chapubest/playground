// 
var apiBasic = 'https://sm.ms/api/v2/';
var token = 'azIR1drhjdggpojgGaH6Gs5iEWlXEWbO';
function tryapi() {
  // $.ajax({
  //   url: apiBasic+'upload_history',
  //   type: "GET",
  //   beforeSend: function(xhr) {
  //     xhr.setRequestHeader("Authorization": token);
  //   },
  //   data: {},
  //   error: function(xhr, status, error) {
  //     console.log(status, error);
  //   },
  //   success: function(result, status, xhr) {
  //     var res = JSON.parse(result);
  //     console.log(res);
  //   }
  // });
  getToken();
}
function getToken() {
  $.ajax({
    url: apiBasic+'token',
    type: "POST",
    data: {
      "username": "chapu",
      "password": "sm20385257878i"
    },
    error: function(xhr, status, error) {
      console.log(status, error);
    },
    success: function(result, status, xhr) {
      var res = JSON.parse(result);
      token = res.data.token;
      console.log(res);
    }
  });
}