// var app = angular.module("myApp", []);
// app.controller("loginController", function ($scope, $http) {
//     $scope.userName = null;
//     $scope.password = null;

//     $scope.postdoctordata = function (userName, password) {

//         var data = {
//             userName: userName,
//             password: password
//         }
//         console.log(data);
//         $http.post("http://384a09a05a47.ngrok.io/doctor/login/", JSON.stringify(data))
//             .then(function (res) {
//                 console.log(res);
//                 console.log(res.data);
//                 console.log(res.data[0]);
//                 var docdata = JSON.stringify(res.data[0]);
//                 console.log(docdata);
//                 localStorage.setItem("docdata", docdata);
//                 window.location.href = "doctor-portal.html";
//             })
//     }