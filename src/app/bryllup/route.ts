const html = `<!DOCTYPE html>
<html lang="no">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Bryllupsinvitasjon</title>
<link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">


<style>
    .font-script {
    font-family: 'Allura', cursive;
    font-size: 28px;
}

    body {
        margin: 0;
        padding: 0;
        font-family: "Georgia", serif;
        background: #f4f4f4;
        text-align: center;
        box-sizing: border-box;
    }

    .center {
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* <-- gjør at invitasjonen ikke presses til toppen */
        align-items: center;
        min-height: 100vh;
        padding-top: 20px; /* ekstra sikkerhet mot klipping */
    }

   /* Lys gull 3D-konvolutt */
#envelope {
    position: relative;
    width: 320px;
    height: 210px;
    margin-top: 40px;
    cursor: pointer;

    transform-style: preserve-3d;
    transition: transform 0.6s ease, box-shadow 0.6s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}

/* Liten lift-effekt ved hover */
#envelope:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25);
}

/* Myk skygge under konvolutten */
#envelope .env-shadow {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: -18px;
    height: 28px;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.28), transparent 70%);
    filter: blur(2px);
    opacity: 0.7;
    z-index: 0;
}

/* Bakre del (rektangel) */
#envelope .env-back {
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: linear-gradient(135deg, #f9e8c9, #e7cd95);
    border: 1px solid #c9a24f;
    z-index: 1;
}

/* Fronten (bunn + sideflapper) */
#envelope .env-front {
    position: absolute;
    inset: 0;
    border-radius: 0 0 14px 14px;
    background: linear-gradient(135deg, #f7e1b7, #e2c184);
    clip-path: polygon(
        0 40%,   /* venstre knekk */
        50% 100%,/* spiss nede */
        100% 40%,/* høyre knekk */
        100% 100%,
        0 100%
    );
    border-bottom: 1px solid #c9a24f;
    z-index: 3;
}

/* Topp-flappen (triangel som åpner seg) */
#envelope .env-flap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(135deg, #fdf0d2, #e9cf93);
    clip-path: polygon(
        0 0,
        100% 0,
        50% 72%
    );
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    border: 1px solid #c9a24f;
    border-bottom: none;

    transform-origin: top center;
    transform: rotateX(0deg);
    transition: transform 0.6s ease;
    z-index: 4;
}

/* Tekst på konvolutten */
#envelope .env-text {
    position: absolute;
    bottom: 28px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 16px;
    color: #7a5a35;
    z-index: 5;
    font-family: "Georgia", serif;
}

/* Når vi "åpner" konvolutten i JS */
#envelope.open .env-flap {
    transform: rotateX(-180deg);
}

/* Litt fade/lett bevegelse på hele konvolutten når den åpnes */
#envelope.open {
    transform: translateY(16px) scale(0.97);
    opacity: 0;
}


#envelope-text {
    margin-top: 12px;
    font-size: 16px;
    color: #7a5a35;
    font-family: Georgia, serif;
}


    #invitation {
    display: none;
    max-width: 420px;
    margin: 40px auto;

    /* ---- BAKGRUNN BARE PÅ INVITASJONEN ---- */
    background-image: url('/bryllup/bakgrunn3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* ---------------------------------------- */

    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.1);

    animation: fadeIn 1s ease forwards;

    /* Litt hvit overlay for bedre lesbarhet */
    position: relative;
}

#invitation::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;

    /* ÉN subtil hvit gradient nederst */
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 55%,   /* helt usynlig øverst */
        rgba(255, 255, 255, 0.45) 75%,/* veldig svak hvit */
        rgba(255, 255, 255, 0.48) 100%/* litt mer synlig i bunnen */
    );

    z-index: 0;
}


/* Alt innhold oppå bakgrunnen */
#invitation * {
    position: relative;
    z-index: 1;
}


    #invitation img {
    width: 70%;              /* litt smalere */
    height: 320px;           /* <--- juster høyden her */
    object-fit: cover;       /* sørger for pen beskjæring */
    object-position: 50% 35%;/* flytt utsnittet – kan justeres */

    border-radius: 10%;      /* sirkel */
    margin-top: 10px;
    border: 5px solid #D4AF37;
}



    h1 {
        font-family: 'Great Vibes', cursive;
        font-size: 42px;
        color: #333;
        margin-bottom: -40px;
        margin-top: 0px;
    }

    p {
        font-size: 16px;
        color: #333;
        white-space: pre-line;
        padding: 0 10px;
    }

    .left {
        text-align: left;
        margin-top: -30px;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
@media (max-width: 480px) {

    #envelope {
        width: 260px;
        height: 170px;
        margin-top: 20px;
    }

    #envelope-text {
        font-size: 14px;
        margin-bottom: 10px;
    }

    #invitation {
        max-width: 94%;
        margin: 20px auto;
        padding: 16px;
    }

    #invitation img {
        width: 80%;
        border-width: 4px;
    }

    h1 {
        font-size: 32px; /* mindre script-font på mobil */
        margin-bottom: -20px;
    }

    p {
        font-size: 15px;
        padding: 0 6px;
    }

    .font-script {
        font-size: 22px;
    }
}


</style>

</head>

<body>

<div class="center">
    <div id="envelope" onclick="openInvitation()">
    <div class="env-shadow"></div>
    <div class="env-back"></div>
    <div class="env-front"></div>
    <div class="env-flap"></div>

</div>

<!-- Flyttet teksten ut av konvolutten -->
<div id="envelope-text">Klikk for å åpne invitasjonen</div>


    <div id="invitation">
        <img src="/bryllup/1000003259.jpg" alt="Bryllupsbilde" />

        <h1>Velkommen til vårt bryllup </h1>
        <p>
Kirkeklokkene vil ringe for
Kjell Håkon og Ann-Kristin 25. juli 2026.

I denne anledning har vi gleden av å invitere deg/dere til vårt bryllup i Oksfjord kapell kl. 12.

Dere er velkommen til å starte dagen med oss hjemme i Sandbukt kl. 10 før vi går i sammen til kapellet.

Etter vielsen vil dagen bli feiret ute ved fjorden kl. 15. Det vil bli servert koldtbord med varmrett, dessert og kaker. Øl og vin vil bli servert til maten. Ta med det du ønsker å drikke videre ut over festen.

Vennlig hilsen
<span class="font-script">Kjell Håkon og Ann-Kristin</span>
Adresse: Storengveien 32
Svar innen 20. juni 2026 til:
Ann-Kristin tlf 47756869
Kjell Håkon tlf 92048557
        </p>
    </div>
    </div>

<audio id="music" src="/bryllup/bryllupsmarsj.mp3"></audio>

<script>
function openInvitation() {
    const envelope = document.getElementById("envelope");
    const invitation = document.getElementById("invitation");
    const music = document.getElementById("music");
    const envelopeText = document.getElementById("envelope-text");

    envelope.classList.add("open");

    setTimeout(() => {
        envelope.style.display = "none";
        envelopeText.style.display = "none";
        music.currentTime = 7;
        invitation.style.display = "block";

        music.play();
    }, 700);
}

</script>

</body>
</html>
`;

export async function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
