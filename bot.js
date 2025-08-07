const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan nama saya Dhandy. nama kamu siapa?",
    `Halo ${data?.nama}, Berapa usia kamu?`,
    `ohhh ${data?.usia}, Hobi kamu apa ya?`,
    `wow! hobi nya ${data?.hobi} keren juga, btw punya pacar gak?`,
    `ohh ${data?.pacar}, yauda kalo gitu yaa`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu");
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `thank u ya ${usersData[0]} udah main ke dhanzbot 😉, semangat beraktivitas ya!! ${usersData[2]} bareng ya!`;
  jawaban.value = "siap thanks juga!";
}

function botEnd() {
  alert(
    `Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`
  );
  window.location.reload();
}
