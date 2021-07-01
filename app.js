const nextbtn = document.querySelector('.next');
const prevbtn = document.querySelector('.prev');

nextbtn.onclick = function () {
  document.querySelector('.is1').scrollLeft += 300;
};

prevbtn.onclick = function () {
    document.querySelector('.is1').scrollLeft -= 300;
  };