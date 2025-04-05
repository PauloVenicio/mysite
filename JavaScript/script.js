function updateClock() {
    const now = new Date();
    const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    const dayOfWeek = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const dateTimeString = `${dayOfWeek}, ${day} de ${month} de ${year} - ${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerText = dateTimeString;
}

setInterval(updateClock, 1000);
updateClock();

function toggleMoreText() {
    const moreText = document.querySelector(".more-text");
    const btn = document.querySelector(".btn-leia-mais");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        btn.textContent = "Leia menos";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Leia mais";
    }
}