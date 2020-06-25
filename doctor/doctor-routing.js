var myApp = angular.module("myApp4", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('patient-reprt-form', {
        url: '/report',
        templateUrl:'/doctor/patient-report-form.html',
        controller :'reportFormController'
    })
    .state('patient-rqst', {
        url: '/rqst',
        templateUrl:'/doctor/PATIENT-RQSR.html',
        controller :'patientRqst'
    })
    .state('reject-rqst', {
        url: '/rqst',
        templateUrl:'/doctor/rejectrqstmsg.html',
        controller :'rejectRqst'
    })
    .state("patient-lst", {
        url: '/pList',
        templateUrl:'/doctor/patient-list.html',
        controller :'patientListController'
    })
    
    .state('root', {
        url: '/',
        templateUrl: "/doctor/doctor-home.html",
        controller :'home'
    })
    $urlRouterProvider.otherwise('/');

});

// -----------------------------------report-Submit-------------------------------------------
myApp.controller("reportFormController", function ($scope, $http) {
    // console.log('SVD')
    $scope.Height = "";
    $scope.Weight = "";
    $scope.BloodGroup = "";
    $scope.reportMsg = "";
    $scope.medicines = "";

    $scope.SubmitReport = function (Height,Weight, BloodGroup, reportMsg, medicines) {

            var data = {
                height: Height,
                Weight: Weight,
                blood_group: BloodGroup,
                report_message: reportMsg,
                prescribed_medicine: medicines,
                appointment_id_id: localStorage.getItem('AppointId')
                }
            console.log(data);
            var doctor_regestration = localStorage.getItem('api')
            url_doctor_regestration = doctor_regestration + 'medicalhistory/add/'
            $http.post(url_doctor_regestration, JSON.stringify(data))
            // $http.post("http://5dc1febbc952.ngrok.io/doctor/register/", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    alert('successfully Registered')
                    window.location.href = "/doctor/doctor-dashboard.html";

                })
        }

    })
// ------------------------------------------------Patient-List-------------------------------------------------
myApp.controller("patientListController",function($scope, $http){
    $scope.shortColumn = 'first_name';
    // var user_api = localStorage.getItem('api')
    // url_doc_approveed_list = user_api + 'reception/rejecteddoctorlist/'
    // $http.get(url_doc_approveed_list)
    dApprover_list = localStorage.getItem('Approver_list'),
    dApprover_list = JSON.parse(dApprover_list);
$scope.dApprover_list = dApprover_list
console.log($scope.dApprover_list)
    // $http.get('https://reqres.in/api/users?page=2')
        // .then(function(response){
            // $scope.employees = response.data;
            // console.log($scope.employees)
        // })
});

// ----------------------------------patient-rqst-------------------------------------------------------------------
myApp.controller("patientRqst",function($scope, $http){
    $scope.shortColumn = 'first_name';
    drPData = localStorage.getItem('drPData'),
    drPData = JSON.parse(drPData);
$scope.drPData = drPData
console.log($scope.drPData)

// var user_api = localStorage.getItem('api')
    // url_doc_list = user_api + 'reception/notapproveddoctorlist/'
    // $http.get('https://19a4030cfdf5.ngrok.io/reception/notapproveddoctorlist/')
    // $http.get(url_doc_list)
        // .then(function(response){
            // $scope.doctorRqst = response.data;
            // console.log($scope.doctorRqst)
        // })
        $scope.acceptFinalRqst = function () {
            var user_api = localStorage.getItem('api')
            url_pat_approve = user_api + 'appointment/doctorapproveappointment/'
            var data = {
                appointment_id: localStorage.getItem('appointid')
            }
            console.log(data);
            $http.post( url_pat_approve , JSON.stringify(data))
                // $http.get('https://reqres.in/api/users?page=2')
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    alert('successfully Registered')
                    window.location.href = "/doctor/doctor-dashboard.html";
                })
        }
    })

myApp.controller("home", function ($scope, $http) {
    doctorProfile = localStorage.getItem('doctorProfile'),
    doctorProfile = JSON.parse(doctorProfile);
$scope.doctorProfile = doctorProfile
console.log($scope.doctorProfile)

    $scope.getRqstData = function () {

            var data = {
                doctor_id: $scope.doctorProfile[0].id
                }
            console.log(data);
            var doctor_regestration = localStorage.getItem('api')
            url_doctor_regestration = doctor_regestration + 'appointment/doctorpending/'
            $http.post(url_doctor_regestration, JSON.stringify(data))
            // $http.post("http://5dc1febbc952.ngrok.io/doctor/register/", JSON.stringify(data))
                .then(function (response) {
                    // alert(response);
                    console.log(response.data);
                    var drPData = JSON.parse(JSON.stringify(response.data));
                    var drPData = JSON.stringify(drPData);
                    localStorage.setItem("drPData", drPData);

                })
        }


    $scope.getpatientList = function () {

        var data = {
            doctor_id: $scope.doctorProfile[0].id
            }
        console.log(data);
        var doctor_regestration = localStorage.getItem('api')
        url_doctor_regestration = doctor_regestration + 'doctor/allapprovedappointment/'
        $http.post(url_doctor_regestration, JSON.stringify(data))
        // $http.post("http://5dc1febbc952.ngrok.io/doctor/register/", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                var drsPData = JSON.parse(JSON.stringify(response.data));
                var drsPData = JSON.stringify(drsPData);
                localStorage.setItem("Approver_list" , drsPData);

            })
    }

})
    myApp.controller("rejectRqst", function ($scope, $http) {
        $scope.message = "";
    
        $scope.rejectMsg = function (message) {
                var data = {
                    message: message,
                    appointment_id: localStorage.getItem('appId2')
                }
                console.log(data);
                var user_api = localStorage.getItem('api')
                url_patient_reject_appoinment = user_api + 'appointment/rejectappointment/'
                $http.post(url_patient_reject_appoinment , JSON.stringify(data))
                    .then(function (response) {
                        console.log(response);
                        console.log(response.data);
                        alert('successfully Registered')
                        window.location.href = "/doctor/doctor-dashboard.html";
                    })
            }
        })