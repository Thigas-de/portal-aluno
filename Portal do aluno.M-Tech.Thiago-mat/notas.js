// scripts.js

// Dados de exemplo para notas e presenças
const gradesData = [
    { disciplina: "Matemática", nota1: 7, nota2: 8, notaFinal: 7.5 },
    { disciplina: "Português", nota1: 5, nota2: 6, notaFinal: 5.5 },
    { disciplina: "Física", nota1: 8, nota2: 9, notaFinal: 8.5 },
];

const attendanceData = [
    { disciplina: "Matemática", aulas: 40, presencas: 35 },
    { disciplina: "Português", aulas: 40, presencas: 30 },
    { disciplina: "Física", aulas: 40, presencas: 38 },
];

// Preenchendo a tabela de notas
const gradesTableBody = document.getElementById("grades-table-body");

gradesData.forEach((grade) => {
    const situacao = grade.notaFinal >= 6 ? "Aprovado" : "Reprovado";
    const row = `
        <tr>
            <td>${grade.disciplina}</td>
            <td>${grade.nota1}</td>
            <td>${grade.nota2}</td>
            <td>${grade.notaFinal}</td>
            <td>${situacao}</td>
        </tr>
    `;
    gradesTableBody.insertAdjacentHTML("beforeend", row);
});

// Preenchendo a tabela de presenças
const attendanceTableBody = document.getElementById("attendance-table-body");

attendanceData.forEach((attendance) => {
    const faltas = attendance.aulas - attendance.presencas;
    const percentualPresenca = ((attendance.presencas / attendance.aulas) * 100).toFixed(2) + "%";
    const row = `
        <tr>
            <td>${attendance.disciplina}</td>
            <td>${attendance.aulas}</td>
            <td>${attendance.presencas}</td>
            <td>${faltas}</td>
            <td>${percentualPresenca}</td>
        </tr>
    `;
    attendanceTableBody.insertAdjacentHTML("beforeend", row);
});
