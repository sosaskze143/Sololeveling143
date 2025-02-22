document.getElementById("student-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const studentId = document.getElementById("student-id").value;
    const errorMessage = document.getElementById("error-message");
    const studentData = document.getElementById("student-data");

    // محاكاة التحقق من الرقم في قاعدة البيانات
    const students = JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(s => s.id === studentId);

    if (student) {
        errorMessage.textContent = "";
        const gradePercentage = (student.grade / 100) * 100;
        studentData.innerHTML = `
            <h3>بيانات الطالب</h3>
            <p><strong>اسم المادة:</strong> ${student.subject}</p>
            <p><strong>الدرجة:</strong> ${student.grade} / 100</p>
            <p><strong>المعدل:</strong> ${gradePercentage}%</p>
            <button class="download-pdf" onclick="downloadPDF()">تحميل البيانات بصيغة PDF</button>
        `;
    } else {
        errorMessage.textContent = "لا يوجد مستخدم بالرقم هذا";
        studentData.innerHTML = "";
    }
});

function downloadPDF() {
    const studentData = document.getElementById("student-data").innerText;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(studentData, 10, 10);
    doc.save("بيانات_الطالب.pdf");
}
