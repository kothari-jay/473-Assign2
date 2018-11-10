
var stud = new App.Student();
  function callSearch(){
    stud.getNamesWithLastName(document.querySelector(FORM_SELECTOR).value);
  }
function callLoadGradeView(fn,ln){
    stud.getGrades(fn,ln);
}
