<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AI Attendance System</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
/* ===== Google Font ===== */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    justify-content: center;
    align-items: center;
}

/* ===== Card ===== */
.container {
    width: 380px;
    padding: 30px;
    border-radius: 18px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(14px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.25);
    color: #fff;
    animation: slideUp 1s ease;
}

@keyframes slideUp {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.container h2 {
    text-align: center;
    margin-bottom: 25px;
    font-weight: 600;
}

/* ===== Input Fields ===== */
input, select {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 14px;
}

input::placeholder {
    color: #666;
}

/* ===== Button ===== */
button {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #00f2fe, #4facfe);
    color: #000;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    transform: scale(1.05);
}

/* ===== Result ===== */
#result {
    margin-top: 15px;
    text-align: center;
    font-weight: 500;
}
</style>
</head>

<body>

<div class="container">
    <h2>📊 AI Attendance System</h2>

    <input type="text" id="name" placeholder="Student Name">
    <input type="text" id="roll" placeholder="Roll Number">

    <select id="status">
        <option value="">Select Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
    </select>

    <button onclick="markAttendance()">Mark Attendance</button>

    <div id="result"></div>
</div>

<script>
function markAttendance() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const status = document.getElementById("status").value;

    if (!name || !roll || !status) {
        document.getElementById("result").innerHTML =
            "❌ Please fill all fields";
        return;
    }

    document.getElementById("result").innerHTML =
        `✅ Attendance Marked<br>
         <b>${name}</b> (${roll})<br>
         Status: <b>${status}</b>`;
}
</script>

</body>
</html>
