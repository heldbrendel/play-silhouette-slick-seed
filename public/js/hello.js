if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
}

/**
 * The Bulma package does not come with any JavaScript.
 Here is however an implementation example, which toggles
 the class is-active on both the navbar-burger and the targeted navbar-menu,
 in Vanilla Javascript.
 */
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

/**
 * The Bulma package does not come with any JavaScript.
 * Here is however an implementation example,
 * which sets the click handler for Bulma delete all on the page,
 * in vanilla JavaScript.
 */
document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
});
