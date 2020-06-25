var myApp = angular.module("myApp5", ['ui.router']);
var  patient_profile = localStorage.getItem('patient_profile')
console.log(patient_profile)
myApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('appoinment-patient', {
        url: '/first',
        templateUrl:'/pages/appoint.html',
        controller :'appointController'
    })
    .state('appoinment-notification', {
        url: '/notification',
        templateUrl:'/patient/appoinment-notofication.html',
        controller :'notificationController'
    })
    .state('patient-report', {
        url: '/report',
        templateUrl:'/patient/patient-report.html',
        controller :'reportController'
    })
    .state('report', {
        url: '/personalReport',
        templateUrl:'/patient/report.html',
        controller :'pReportController'
    })
    // .state('status', {
    //     url: '/status',
    //     templateUrl:'/patient/status.html',
    //     controller :'statusController'
    // })
    
    .state('root', {
        url: '/',
        templateUrl: "/pages/patient-home.html",
        controller :'HomeController'

    })
    $urlRouterProvider.otherwise('/');

});
myApp.controller("HomeController", function ($scope, $http) {
    var patient_profile = localStorage.getItem('patient_profile');
    var patient_profile = JSON.parse(patient_profile)
    $scope.patient_profile = patient_profile;
})

// -------------------------------appointment----------------------------------
myApp.controller("appointController", function ($scope, $http) {
    console.log('SVD')
    $scope.patient_problem = "";
    $scope.previous_problem = "";
    $scope.appointDate = "";
    $scope.appointTime = "";


    $scope.appointPatient = function (patient_problem, previous_problem, appointDate, appointTime) {
        var d = new Date(appointDate)
        var year = d.getFullYear();
        var month = d.getMonth();
        if(month<10){
            months = '0'+month;
        }
        else{
            months = month;
        }
        var date = d.getDate();
        if(date<10){
            dates = '0'+date;
        }
        else{
            dates = date;
        }
        var date = year+ '-' +months+ '-' +dates
        // console.log(asd)
        patient_profile = localStorage.getItem("patient_profile"),
        $scope.patient_profile = JSON.parse(patient_profile);
        var t = new Date(appointTime)
            var times = t.getHours()+':'+t.getMinutes()
            var data = {
                problem: patient_problem,
                existing_disease: previous_problem,
                appointment_date: date,
                appointment_time: times,
                patient_id: $scope.patient_profile[0].id, 
            }
            console.log(data);
            var appoint = localStorage.getItem('api')
            url_appoint = appoint + 'appointment/add/'
            $http.post(url_appoint, JSON.stringify(data))
            // $http.post("https://dd9c37ae60a3.ngrok.io/appointment/add/", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    alert(response.data)
                    window.location.href = "/index.html";

                })
        }

    })

// -----------------------------------------Notification-------------------------------------------------

myApp.controller("notificationController",function($scope, $http){
    // var user_api = localStorage.getItem('api')
    // url = user_api + 'appointment/receptionpending/'
    // $http.get(url)
    patient_profile = localStorage.getItem('patient_profile'),
    patient_profile = JSON.parse(patient_profile);
    $scope.patient_profile = patient_profile
    console.log($scope.patient_profile[0].id)
    var data = {
        patient_id: $scope.patient_profile[0].id, 
    }
    var patient_appoint = localStorage.getItem('api')
    url_patient_appoint = patient_appoint + 'appointment/patientview/'
    $http.post(url_patient_appoint, JSON.stringify(data))
    // $http.post("https://0b094a604d45.ngrok.io/appointment/patientview/", JSON.stringify(data))
    .then(function (response) {
        console.log(response);
        console.log(response.data);
        var appData = JSON.parse(JSON.stringify(response.data));
        $scope.appData = appData;
    })
    //  {
    // console.log('SVD')
    // $scope.App_id = "";


    $scope.SendToDr = function () {

            var data = {
                appointment_id: $scope.appData[0].id, 
            }
            console.log(data);
            var patient_appoint = localStorage.getItem('api')
            url_patient_appoint = patient_appoint + 'appointment/patientapproveappointment/'
            $http.post(url_patient_appoint, JSON.stringify(data))
            // $http.post("http://5dc1febbc952.ngrok.io/patient/register/ ", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    alert('successfully send')
                    window.location.href = "/index.html";

                })
        }

    })
// ------------------------------------------Report---------------------------------------------
myApp.controller("reportController",function($scope, $http){
    patient_profile = localStorage.getItem('patient_profile'),
    patient_profile = JSON.parse(patient_profile);
    $scope.patient_profile = patient_profile
    console.log($scope.patient_profile[0].id)
    var data = {
        patient_id: $scope.patient_profile[0].id, 
    }
    var patient_appoint = localStorage.getItem('api')
    url_patient_appoint = patient_appoint + 'medicalhistory/viewpatient/'
    $http.post(url_patient_appoint, JSON.stringify(data))
    // $http.post("https://0b094a604d45.ngrok.io/appointment/patientview/", JSON.stringify(data))
    .then(function (response) {
        console.log(response);
        console.log(response.data);
        var appData = JSON.parse(JSON.stringify(response.data));
        // localStorage.setItem('reportData', appData)
        $scope.appDatas = appData;
        var appData = JSON.stringify(appData);
        localStorage.setItem('reportData', appData)
        // ur_reports = localStorage.getItem('reportData'),
    // ur_reports = JSON.parse(ur_reports);
    // console.log(ur_reports)
})
});
myApp.controller("pReportController",function($scope){
    reportDr = localStorage.getItem('reportData'),
    reportPat = JSON.parse(reportDr);
    $scope.reportPats = reportPat
    patient_profile = localStorage.getItem('patient_profile'),
    patient_profile = JSON.parse(patient_profile);
    $scope.patient_profile = patient_profile
});
// myApp.controller("statusController",function($scope, $http){
//     // var user_api = localStorage.getItem('api')
//     // url = user_api + 'appointment/receptionpending/'
//     // $http.get(url)
//     ur_status = localStorage.getItem('forStatus'),
//     ur_status = JSON.parse(ur_status);
//     $scope.ur_status = ur_status
// });