function myFuncn(value){
        localStorage.setItem('ID',value);
    var lnam = localStorage.getItem('ID')
// alert(lnam)
    console.log(lnam);
    }
    function myFuncn11(value){
        localStorage.setItem('acptId',value);
    var acptIds = localStorage.getItem('acptId')
// alert(lnam)
    console.log(acptIds);
    }
    function myFuncn2(value){
        localStorage.setItem('reject-ID',value);
    var reject = localStorage.getItem('reject-ID')

    console.log(reject);
    }
    function myFunc1(value){
        localStorage.setItem('deepartment',value);
    var reject = localStorage.getItem('deepartment')

    }
    function myFunc2(value){
        localStorage.setItem('deepartment',value);
    var reject = localStorage.getItem('deepartment')

    }
    function myFunc3(value){
        localStorage.setItem('deepartment',value);
    var reject = localStorage.getItem('deepartment')

    }
    function myFunc4(value){
        localStorage.setItem('deepartment',value);
    var reject = localStorage.getItem('deepartment')

    }
    function sendToDOc(value){
        localStorage.setItem('docId',value);
        var docId = localStorage.getItem('docId')
        console.log(docId)
    }
// ---------------------------Accpt-Doc-Id---------------------------------------------------
function docAcpt(value){
    localStorage.setItem('acptId',value);
    var acptId = localStorage.getItem('acptId')
    console.log(acptId)
}
// ---------------------------Reject-Doc-Id---------------------------------------------------
function docReject(value){
    localStorage.setItem('rgtId',value);
    var rgtId = localStorage.getItem('rgtId')
    console.log(rgtId)
}

function SendId(value){
    localStorage.setItem('DrID',value);
    console.log(value)

}