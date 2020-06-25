var myApp = angular.module("myApp2", ['ui.router']);
myApp.controller("LoginController", LoginController);

function LoginController() {
    var login = this;
    // login.submit = function() {
    //     login.completed = true;
    // }
}
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('pending-patient', {
            url: '/first',
            templateUrl: '/manager/pending-patient-rqst.html',
            controller: 'firstController'
        })
        .state('rejected-patient', {
            url: '/second',
            templateUrl: '/manager/patient-rejected.html',
            controller: 'secondController'
        })
        .state('patient-lists', {
            url: '/third',
            templateUrl: '/manager/patient-list.html',
            controller: 'thirdController'
        })
        .state('pending-doctors', {
            url: '/fourth',
            templateUrl: '/manager/pending-doctor-rqst.html',
            controller: 'fourthController'
        })
        .state('rejected-doctors', {
            url: '/fifth',
            templateUrl: '/manager/doctor-rejected-rqst.html',
            controller: 'fifthController'
        })
        .state('doctors-lists', {
            url: '/sixth',
            templateUrl: '/manager/doctor-list.html',
            controller: 'sixthController'
        })
        // .state('updaterqst', {
        //     url: '/seventh',
        //     templateUrl:'/pages/update-rqst.html',
        //     controller :'seventhController'
        // })
        .state('doctor-registration', {
            url: '/eight',
            templateUrl: '/registration/doctor-registration.html',
            controller: 'eightController'
        })
        .state('reject-patient', {
            url: '/nine',
            templateUrl: '/manager/reject-patient-rqst.html',
            controller: 'nineCtrl'
        })
        .state('accept-patient', {
            url: '/ten',
            templateUrl: '/manager/accept-patient-rqsr.html',
            controller: 'tenCtrl'
        })
        .state('Depertments-doctors', {
            url: '/Eleven',
            templateUrl: '/manager/doctors.html',
            controller: 'ElevenController'
        })
        .state('doctors-rqst', {
            url: '/twelve',
            templateUrl: '/manager/doctors-rqst.html',
            controller: 'twelveController'
        })

        .state('root', {
            url: '/',
            templateUrl: "manager-home.html"
        })
    $urlRouterProvider.otherwise('/');

});

myApp.controller("firstController", function ($scope, $http) {
    $scope.shortColumn = 'id';
    var user_api = localStorage.getItem('api')
    url = user_api + 'appointment/receptionpending/'
    $http.get(url)
        // $http.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
            console.log($scope.employees)
        })
});
myApp.controller("secondController", function ($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
            console.log($scope.employees)
        })
});
myApp.controller("thirdController", function ($scope, $http) {
    $scope.shortColumn = 'patient_id';
    var allpatientsunderdoctor = localStorage.getItem('allpatientsunderdoctor')
    var patientS = JSON.parse(allpatientsunderdoctor)
    $scope.patientss = patientS;
});
myApp.controller("fourthController", function ($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
            console.log($scope.employees)
        })
});
// --------------------------Rejected-doctorRqst---------------------------------------------
myApp.controller("fifthController", function ($scope, $http) {
    $scope.shortColumn = 'id';
    var user_api = localStorage.getItem('api')
    url_doc_approveed_list = user_api + 'reception/rejecteddoctorlist/'
    $http.get(url_doc_approveed_list)
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
        })
});
// -----------------------------doctor-Approved-rqst-------------------------------
myApp.controller("sixthController", function ($scope, $http) {
    $scope.shortColumn = 'id';
    var user_api = localStorage.getItem('api')
    url_doc_rejected_list = user_api + 'reception/approveddoctorlist/'
    $http.get(url_doc_rejected_list)
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
            console.log($scope.employees)
        })
    $scope.allPatientdoctor = function () {

        var data = {
            doctor_id: localStorage.getItem('DrID')
        }
        console.log(data);
        var doctor_regestration = localStorage.getItem('api')
        url_doctor_regestration = doctor_regestration + 'reception/patientunderdoctor/'
        $http.post(url_doctor_regestration, JSON.stringify(data))
            // $http.post("http://5dc1febbc952.ngrok.io/doctor/register/", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                var patientunderdoctor = JSON.parse(JSON.stringify(response.data));
                var allpatientunderdoctor = JSON.stringify(patientunderdoctor);
                localStorage.setItem("allpatientsunderdoctor", allpatientunderdoctor);

            })
    }
});
// --------------------------------update-patent-rqst-------------------------------------
// myApp.controller("seventhController", function ($scope, $http) {

//     console.log('SVD')
//     $scope.date = "";
//     $scope.time = "";
//     console.log('SVDSA')

//     $scope.postdoctordata = function (date, time) {
//         console.log('SVDSDG')
//         var d = new Date(date)
//             var year = d.getFullYear();
//             var month = d.getMonth();
//             if(month<=10){
//                 months = '0'+month;
//             }
//             else{
//                 months = month;
//             }
//             var date = d.getDate();
//             if(date<=10){
//                 dates = '0'+date;
//             }
//             else{
//                 dates = date;
//             }
//             var asd = year+'-'+months+'-'+dates
//             console.log(asd)

//             var t = new Date(time)
//                 var times = t.getHours()+':'+t.getMinutes()
//             var data = {
//                 appointment_date: asd,
//                 appointment_time: times,
//                 id: localStorage.getItem('ID')
//             }
//             console.log(data);
//             var user_api = localStorage.getItem('api')
//             url_patient_edit_appoinment = user_api + 'appointment/editappointment/'
//             $http.post(url_patient_edit_appoinment , JSON.stringify(data))
//                 .then(function (response) {
//                     // console.log(response);
//                     // console.log(response.data);
//                     alert('successfully Registered')
//                     window.location.href = "/pages/manager-dashboard.html";

//                 })
//         }


//     })
// -----------------------------Reject-appointment---------------------------------------
myApp.controller("nineCtrl", function ($scope, $http) {
    $scope.message = "";

    $scope.reject = function (message) {
        var data = {
            message: message,
            id: localStorage.getItem('reject-ID')
        }
        console.log(data);
        var user_api = localStorage.getItem('api')
        url_patient_reject_appoinment = user_api + 'appointment/rejectappointment/'
        $http.post(url_patient_reject_appoinment, JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                alert('successfully Registered')
                window.location.href = "/pages/manager-dashboard.html";
            })
    }
})
// -------------------------------------------appointment-doctor-List------------------------------------
myApp.controller("tenCtrl", function ($scope, $http) {
    $scope.doctor = function () {

        var data = {
            department: localStorage.getItem('deepartment'),
        }
        console.log(data);
        var user_api = localStorage.getItem('api')
        url_Doctor_liist_appoinment = user_api + 'appointment/doctorlist/'
        $http.post(url_Doctor_liist_appoinment, JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                var drName = JSON.parse(JSON.stringify(response.data));
                var drNames = JSON.stringify(drName);
                localStorage.setItem("DrData", drNames);
                // localStorage.setItem('regsata',Data)
                // var drPData = JSON.stringify(drPData);
                // var docid = JSON.stringify(response.data);
                // localStorage.setItem("docid", docid);
            })
    }
})
// --------------------------------------Accept-Appoinment-------------------------------------
myApp.controller("ElevenController", function ($scope, $http) {
    // console.log('sddv')
    doctors = localStorage.getItem('DrData'),
        doctorsse = JSON.parse(doctors);
    // console.log(localStorage.getItem('regdata'))
    $scope.doctorss = doctorsse
    console.log($scope.doctorss)
    $scope.app_date = "";
    $scope.app_time = "";
    $scope.sendToDoctor = function (app_date, app_time) {
        var d = new Date(app_date)
        var year = d.getFullYear();
        var month = d.getMonth();
        if (month <= 10) {
            months = '0' + month;
        }
        else {
            months = month;
        }
        var date = d.getDate();
        if (date <= 10) {
            dates = '0' + date;
        }
        else {
            dates = date;
        }
        var app_Date = year + '-' + months + '-' + dates
        // console.log(asd)

        var t = new Date(app_time)
        var app_Time = t.getHours() + ':' + t.getMinutes()

        var data = {
            appointment_id: localStorage.getItem('acptId'),
            doctor_id: localStorage.getItem('docId'),
            appointment_time: app_Time,
            appointment_date: app_Date
        }
        console.log(data);
        var user_api = localStorage.getItem('api')
        url_Accept_appoinment = user_api + 'appointment/forwardtodoctor/ '
        $http.post(url_Accept_appoinment, JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                alert('successfully send')
                window.location.href = "/pages/manager-dashboard.html";
            })
    }


})

// -----------------------------------approvrd-rqst-----------------------------------------------------
myApp.controller("twelveController", function ($scope, $http) {
    $scope.shortColumn = 'id';
    var user_api = localStorage.getItem('api')
    url_doc_list = user_api + 'reception/notapproveddoctorlist/'
    // $http.get('https://19a4030cfdf5.ngrok.io/reception/notapproveddoctorlist/')
    $http.get(url_doc_list)
        .then(function (response) {
            $scope.doctorRqst = response.data;
            console.log($scope.doctorRqst)
        })
    $scope.acceptDoctRqst = function () {
        var user_api = localStorage.getItem('api')
        url_doc_approve = user_api + 'reception/approvedoctor/'
        var data = {
            doctor_id: localStorage.getItem('acptId')
        }
        console.log(data);
        $http.post(url_doc_approve, JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                alert('successfully Registered')
                window.location.href = "/pages/manager-dashboard.html";
            })
    }
    $scope.rejectDoctRqst = function () {
        var user_api = localStorage.getItem('api')
        url_doc_reject = user_api + 'reception/rejectdoctor/'
        var data = {
            doctor_id: localStorage.getItem('rgtId')
        }
        console.log(data);
        $http.post(url_doc_reject, JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                alert('successfully Registered')
                window.location.href = "/pages/manager-dashboard.html";
            })
    }
});