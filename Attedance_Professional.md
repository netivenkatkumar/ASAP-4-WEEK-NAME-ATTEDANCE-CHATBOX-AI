<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Attendance Management System</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
/* ===== Professional Font ===== */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Inter', sans-serif;
}

body{
    min-height:100vh;
    background:#f4f6f9;
    display:flex;
    justify-content:center;
    align-items:center;
}

/* ===== Card Layout ===== */
.attendance-card{
    width:420px;
    background:#ffffff;
    padding:30px;
    border-radius:14px;
    box-shadow:0 10px 30px rgba(0,0,0,0.1);
}

/* ===== Header ===== */
.header{
    text-align:center;
    margin-bottom:25px;
}

.header h2{
    color:#1f2937;
    font-weight:600;
}

.header p{
    font-size:13px;
    color:#6b7280;
}

/* ===== Form ===== */
label{
    font-size:13px;
    color:#374151;
    display:block;
    margin-bottom:6px;
    margin-top:14px;
}

input, select{
    width:100%;
    padding:11px;
    border-radius:8px;
    border:1px solid #d1d5db;
    font-size:14px;
}

input:focus, select:focus{
    outline:none;
    border-color:#2563eb;
}

/* ===== Button ===== */
button{
    margin-top:22px;
    width:100%;
    padding:12px;
    background:#2563eb;
    color:#fff;
    border:none;
    border-radius:10px;
    font-size:15px;
    font-weight:500;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    background:#1e40af;
}

/* ===== Result ===== */
.result{
    margin-top:20px;
    padding:14px;
    border-radius:8px;
    background:#f0fdf4;
    color:#065f46;
    font-size:14px;
    display:none;
}
</style>
</head>

<body>

<div class="attendance-card">
    <div class="header">
        <h2>Attendance Management</h2>
        <p>Professional Attendance Entry</p>
    </div>

    <label>Employee / Student Name</label>
    <input type="text" id="name" placeholder="Enter full name">

    <label>ID / Roll Number</label>
    <input type="text" id="id" placeholder="Enter ID">

    <label>Date</label>
    <input type="date" id="date">

    <label>Status</label>
    <select id="status">
        <option value="">Select status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Leave">Leave</option>
    </select>

    <button onclick="submitAttendance()">Submit Attendance</button>

    <div class="result" id="result"></div>
</div>

<script>
function submitAttendance(){
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if(!name || !id || !date || !status){
        alert("Please fill all fields");
        return;
    }

    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = `
        <strong>Attendance Recorded Successfully</strong><br>
        Name: ${name}<br>
        ID: ${id}<br>
        Date: ${date}<br>
        Status: ${status}
    `;
}
</script>

</body>
</html>
