
var content = document.getElementsByClassName('content')[0];
var sidebar = document.getElementsByClassName('sidebar')[0];
var footer = document.getElementsByClassName('footer')[0];

var checkMobile = () => {
  if ( window.innerHeight > window.innerWidth ) {
    content.classList.remove("content");
    content.classList.add("mobile-content");

    sidebar.classList.remove("sidebar");
    sidebar.classList.add("mobile-sidebar");

    footer.classList.remove('footer');
    footer.classList.add('mobile-footer');
  } else {
    content.classList.add("content");
    content.classList.remove("mobile-content");

    sidebar.classList.add("sidebar");
    sidebar.classList.remove("mobile-sidebar");

    footer.classList.add('footer');
    footer.classList.remove('mobile-footer');
  }
}
checkMobile();
window.addEventListener('resize', checkMobile);
