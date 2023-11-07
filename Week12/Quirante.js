function StudentGrade() {
    var studentName  = document.getElementById('studentname');
    var border1 = document.getElementById('border1')
    studentName.style.margin = 'auto';
    studentName.style.textAlign = 'center';
    border1.style.border = '10px solid black';
    var name = document.getElementById('name')
    name.style.border = '2px solid green';
    name.style.backgroundColor = 'black'
    name.style.color = 'white'
    name.style.width = '150px'
    name.style.fontWeight = 'bold'
    // var nameP = document.getElementById('name_p')
    // nameP.style.paddingRight = '10px'
    // nameP.style.paddingLeft = '10px'
    var grade = document.getElementById('grade')
    grade.style.border = '2px solid green';
    grade.style.backgroundColor = 'black'
    grade.style.color = 'white'
    grade.style.width = '150px'
    grade.style.fontWeight = 'bold'
}
StudentGrade();