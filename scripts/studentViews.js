  var s = new App.Student();
function addPfunc() {
  var elts = document.getElementsByTagName('p');

  for (var i = elts.length - 1; i >= 0; --i) {
    var name = elts[i].innerHTML.split("");

    elts[i].onclick = s.getGrades(name[0], name[1]);
  }
}

function loadNameView(LastNameArr) {
  var output = document.getElementById("StudentNames");
  LastNameArr.forEach(function(s) {
    var p = document.createElement('P');

p.addEventListener('click', function(){ callLoadGradeView(s.firstName,s.lastName);}, false);
    p.innerHTML = "" + s.firstName + " " + s.lastName + "";
    output.append(p);
  });

}

function loadGradeView(studentData) {
  var name =" "+studentData.firstName + " " + studentData.lastName;
  document.getElementById("gradesfor").textContent = "Grades for"+name;
  var output = document.getElementById("StudentGrades");
  output.innerHTML="";
  var gradesList = studentData.grade;
  var table = createGradeTable(gradesList)
  output.append(table);


}

function createGradeTable(Data) {

  var table = document.createElement('table');
  table.innerHTML = "<td>Class</td><td>Grade</td>";
  Data.forEach(function(s) {
    var p = document.createElement('tr');
    p.innerHTML = "<td>" + s.ClassName + "</td><td>" + s.Grade + "</td>";
    table.append(p);
  });
  return table;
}
