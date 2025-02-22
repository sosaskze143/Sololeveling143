document.getElementById("add-grade-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const studentId = document.getElementById("student-id").value;
    const studentName = document.getElementById("student-name").value;
    const subject = document.getElementById("subject").value;
    const studentGrade = document.getElementById("student-grade").value;
    const successMessage = document.getElementById("success-message");

    // محاكاة قاعدة بيانات الطلاب
    let students = JSON.parse(localStorage.getItem("students")) || [];

    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex !== -1) {
        students[studentIndex] = { id: studentId, name: studentName, subject: subject, grade: studentGrade };
        successMessage.textContent = `تم تعديل درجة الطالب ${studentName} بنجاح!`;
    } else {
        students.push({ id: studentId, name: studentName, subject: subject, grade: studentGrade });
        successMessage.textContent = `تم إضافة الطالب ${studentName} بنجاح!`;
    }

    // حفظ البيانات في localStorage
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("student-id").value = "";
    document.getElementById("student-name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("student-grade").value = "";
});
