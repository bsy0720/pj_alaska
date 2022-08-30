// qna 아코디언

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      var act = document.querySelectorAll('.accordion.active');
      for (j = 0; j < act.length; j++) {
        act[j].classList.remove('active');
        act[j].nextElementSibling.style.maxHeight = null;
      }
      this.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}