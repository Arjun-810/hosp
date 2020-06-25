function regdoctor(){
    var firstNameRegDoc = document.getElementById("firstNameRegDoc").value;
    var q = /^[A-Za-z .]{3,20}$/;
    if(firstNameRegDoc.match(q))
        document.getElementById('docFnamMsg').innerHTML = '';
    else
        document.getElementById('docFnamMsg').innerHTML = 'Invalid first name';
    var lastNameRegDoc = document.getElementById("lastNameRegDoc").value;
    if(lastNameRegDoc.match(q))
        document.getElementById('docLnamMsg').innerHTML = '';
    else
        document.getElementById('docLnamMsg').innerHTML = 'Invalid last name';
    var mailRegDoc = document.getElementById('mailRegDoc').value;
    var p = /^([A-Za-z 0-9]+)@([a-z]{5,10}).([a-z]{2,5})$/;
    if(mailRegDoc.match(p))
        document.getElementById('docMailMsg').innerHTML = '';
    else
        document.getElementById('docMailMsg').innerHTML = 'Invalid mail';
    var mobRegDoc = document.getElementById('mobRegDoc').value;
    var R = /^[0-9]{10}$/;
    if(mobRegDoc.match(R))
        document.getElementById('docmobMsg').innerHTML = '';
    else
        document.getElementById('docmobMsg').innerHTML = 'Invalid nummber';
    var pswrdRegDoc1 = document.getElementById('pswrdRegDoc1').value;
    var s = /^[A-Za-z .@/-_0-9]{8,20}$/;
    if(pswrdRegDoc1.match(s))
        document.getElementById('docpassMsg1').innerHTML = '';
    else
        document.getElementById('docpassMsg1').innerHTML = 'Invalid Password';
    var pswrdRegDoc2 = document.getElementById('pswrdRegDoc2').value;
    if(pswrdRegDoc1 != pswrdRegDoc2)
        document.getElementById('docpassMsg2').innerHTML = 'Password not match';
    else
    document.getElementById('docpassMsg2').innerHTML = '';
    var ageRegDoc = document.getElementById('ageRegDoc').value;
    var t = /^[0-9]{1,3}$/;
    if(ageRegDoc.match(t))
        document.getElementById('docageMsg').innerHTML = '';
    else
        document.getElementById('docageMsg').innerHTML = 'Invalid Age';
    var degreeRegDoc = document.getElementById("degreeRegDoc").value;
    var u = /^[A-Za-z .]{3,20}$/;
    if(degreeRegDoc.match(u))
        document.getElementById('docdegreeMsg').innerHTML = '';
    else
        document.getElementById('docdegreeMsg').innerHTML = 'Invalid Degree';
    var addressRegDoc = document.getElementById("addressRegDoc").value;
    var v = /^[A-Za-z0-9/ .]{3,50}$/;
    if(addressRegDoc.match(v))
        document.getElementById('docaddressMsg').innerHTML = '';
    else
        document.getElementById('docaddressMsg').innerHTML = 'Invalid Address';
    var expRegDoc = document.getElementById('expRegDoc').value;
    var w = /^[0-9]{1,2}$/;
    if(expRegDoc.match(w))
        document.getElementById('docexpMsg').innerHTML = '';
    else
        document.getElementById('docexpMsg').innerHTML = 'Invalid Experience years';
}
// ----------------------------------------patient-registration---------------------------------
function patientRegFunc(){
    var patientFnamReg = document.getElementById("patientFnamReg").value;
    var q = /^[A-Za-z .]{3,20}$/;
    if(patientFnamReg.match(q))
        document.getElementById('patientFnamMsg').innerHTML = '';
    else
        document.getElementById('patientFnamMsg').innerHTML = 'Invalid first name';
        var patientLnamReg = document.getElementById("patientLnamReg").value;
        if(patientLnamReg.match(q))
            document.getElementById('patientLnamMsg').innerHTML = '';
        else
            document.getElementById('patientLnamMsg').innerHTML = 'Invalid last name';
        var patientmailReg = document.getElementById('patientmailReg').value;
        var p = /^([A-Za-z 0-9]+)@([a-z]{5,10}).([a-z]{2,5})$/;
        if(patientmailReg.match(p))
            document.getElementById('patientmailMsg').innerHTML = '';
        else
            document.getElementById('patientmailMsg').innerHTML = 'Invalid mail';
        var patientmobReg = document.getElementById('patientmobReg').value;
        var R = /^[0-9]{10}$/;
        if(patientmobReg.match(R))
            document.getElementById('patientmobMsg').innerHTML = '';
        else
            document.getElementById('patientmobMsg').innerHTML = 'Invalid nummber';
        var patientpswrdReg1 = document.getElementById('patientpswrdReg1').value;
        var s = /^[A-Za-z .@/-_0-9]{8,20}$/;
        if(patientpswrdReg1.match(s))
            document.getElementById('patientpswrdMsg1').innerHTML = '';
        else
            document.getElementById('patientpswrdMsg1').innerHTML = 'Invalid Password';
        var patientpswrdReg2 = document.getElementById('patientpswrdReg2').value;
        if(patientpswrdReg1 != patientpswrdReg2)
            document.getElementById('patientpswrdMsg2').innerHTML = 'Password not match';
        else
        document.getElementById('patientpswrdMsg2').innerHTML = '';
        var patientageReg = document.getElementById('patientageReg').value;
        var t = /^[0-9]{1,3}$/;
        if(patientageReg.match(t))
            document.getElementById('patientageMsg').innerHTML = '';
        else
            document.getElementById('patientageMsg').innerHTML = 'Invalid Age';
        var patientaddressReg = document.getElementById("patientaddressReg").value;
        var v = /^[A-Za-z0-9/ .]{3,50}$/;
        if(patientaddressReg.match(v))
            document.getElementById('patientaddressMsg').innerHTML = '';
        else
            document.getElementById('patientaddressMsg').innerHTML = 'Invalid Address';
   
    }
// -----------------------------------doctor-Login---------------------------------------
function docLoginUserNam(){
    var docLoginUserNam = document.getElementById('docLoginUserNam').value;
    if(docLoginUserNam == '')
    document.getElementById('docLoginUserMsg').innerHTML = 'Please Enter Doctor Mail Id'
}
function docLoginUserpswrd(){
    var docLoginUserpswrd = document.getElementById('docLoginUserpswrd').value;
    // alert(docLoginUserpswrd)
    if(docLoginUserpswrd == '')
    document.getElementById('docLoginUserpswrdMsg').innerHTML = 'Please Enter Doctor password'
}
// -----------------------------------patient-Login---------------------------------------
function docLoginUserNam(){
    var docLoginUserNam = document.getElementById('docLoginUserNam').value;
    if(docLoginUserNam == '')
    document.getElementById('docLoginUserMsg').innerHTML = 'Please Enter Doctor Mail Id'
}
function docLoginUserpswrd(){
    var docLoginUserpswrd = document.getElementById('docLoginUserpswrd').value;
    // alert(docLoginUserpswrd)
    if(docLoginUserpswrd == '')
    document.getElementById('docLoginUserpswrdMsg').innerHTML = 'Please Enter Doctor password'
}
// -----------------------------------Manager-Login---------------------------------------
function managerLoginUserNam(){
    var managerLoginUserNam = document.getElementById('managerLoginUserNam').value;
    if(managerLoginUserNam == '')
    document.getElementById('managerLoginUserMsg').innerHTML = 'Please Enter Manager user Name'
}
function managerLoginUserPswrd(){
    var managerLoginUserPswrd = document.getElementById('managerLoginUserPswrd').value;
    // alert(docLoginUserpswrd)
    if(managerLoginUserPswrd == '')
    document.getElementById('managerLoginpswrdMsg').innerHTML = 'Please Enter Manager Password'
}