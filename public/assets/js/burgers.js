// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevourState = {
      devour: true
    };
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        //location.reload();
      }
    );
   

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {
        devour: true
      }
    }).then(
      function() {
        console.log("changed devour");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
