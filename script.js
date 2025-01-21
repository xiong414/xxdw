document.getElementById('clickMe').addEventListener('click', function() {
    alert('喵喵大王我爱你！');
});


// 获取今天的日期
const today = new Date();
const todayDateString = today.toLocaleDateString();

// 目标日期
const targetDate = new Date('2024-06-13');

// 计算差值
const timeDiff = today - targetDate;
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

// 显示今天的日期
document.getElementById("today-date").textContent = todayDateString;

// 显示差值
document.getElementById("date-diff").textContent = daysDiff;
