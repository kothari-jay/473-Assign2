(function(window){
  'use strict';
  var App=window.App || {};
    
  function Student(){
    console.log('running through Student List');
    this.data=STUDENTLIST;
  }

Student.prototype.getNamesWithLastName = function (lastName) {
    var lnameData=this.data[lastName];
   loadNameView(lnameData);
};

Student.prototype.getGrades = function (FirstName,lastName) {
  var studentWithLastName=this.data[lastName];
  var studentData = studentWithLastName.find(function(element) {
    return element.firstName == FirstName;
  });
  loadGradeView(studentData);
};

  App.Student=Student;
  window.App=App;
})(window);
