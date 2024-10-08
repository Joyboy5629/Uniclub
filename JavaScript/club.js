// Select all tabs and contents
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab_content");

// Add event listeners to all tabs
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs and contents
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // Add 'active' class to the clicked tab and corresponding content
    tab.classList.add("active");
    contents[index].classList.add("active");
  });
});

// Get the scroll arrow element
const scrollToTop = document.getElementById("scrollToTop");
const test1 = document.querySelector(".club_page");

// Show the arrow when scrolling down and hide it when at the top
test1.onscroll = function () {
  if (test1.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollToTop.style.display = "flex"; // Show arrow
    scrollToTop.style.opacity = "1"; // Show arrow
  } else {
    scrollToTop.style.display = "none"; // Hide arrow
    scrollToTop.style.opacity = "0"; // Show arrow
  }
};

// Scroll to top when the arrow is clicked
scrollToTop.onclick = function () {
  test1.scrollTo({ top: 0, behavior: "smooth" });
};

// test //
// Show create event modal when create button is clicked

// Close create event modal if clicked outside
document.addEventListener("click", function (event) {
  const createContainer = document.getElementById("ctab3_2_container");
  const isCreateEventButton = event.target.id === "create_event";
  const isClickInsideCreate =
    createContainer && createContainer.contains(event.target);

  if (!isClickInsideCreate && !isCreateEventButton) {
    document.getElementById("ctab3_create").style.display = "none";
  }
});

// Show delete event modal when delete button is clicked
document.querySelectorAll(".delete_event").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById("ctab3_delete").style.display = "block";
  });
});

// Hide delete event modal when confirmed delete button is clicked
// document
//   .getElementById("confirm_delete_event")
//   .addEventListener("click", function () {
//     document.getElementById("ctab3_delete").style.display = "none";
//   });

// Hide delete event modal when cancel button is clicked
// document.querySelectorAll(".cancel").forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     document.getElementById("ctab3_delete").style.display = "none";
//   });
// });

// Close delete event modal if clicked outside
// document.addEventListener("click", function (event) {
//   const deleteContainer = document.getElementById("ctab3_delete_container");
//   const isDeleteEventButton = event.target.classList.contains("delete_event");
//   const isClickInsideDelete =
//     deleteContainer && deleteContainer.contains(event.target);

//   if (!isClickInsideDelete && !isDeleteEventButton) {
//     document.getElementById("ctab3_delete").style.display = "none";
//   }
// });

// Accept member functionality
const acceptButtons = document.querySelectorAll(".accept");
const confirmAccept = document.getElementById("confirm_accept_member");
const acceptPopup = document.getElementById("ctab4_accept");
const cancelButtons = document.querySelectorAll(".cancel");

acceptButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    acceptPopup.style.display = "block";
  });
});

confirmAccept.addEventListener("click", function () {
  acceptPopup.style.display = "none";
});

cancelButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    acceptPopup.style.display = "none";
  });
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest("#ctab4_accept_container") &&
    !event.target.classList.contains("accept")
  ) {
    acceptPopup.style.display = "none";
  }
});

// Decline member functionality
const declineButtons = document.querySelectorAll(".decline");
const confirmDecline = document.getElementById("confirm_decline_member");
const declinePopup = document.getElementById("ctab4_decline");

declineButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    declinePopup.style.display = "block";
  });
});

confirmDecline.addEventListener("click", function () {
  declinePopup.style.display = "none";
});

cancelButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    declinePopup.style.display = "none";
  });
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest("#ctab4_decline_container") &&
    !event.target.classList.contains("decline")
  ) {
    declinePopup.style.display = "none";
  }
});

// Tabs functionality for owner requests
// const requestTabs = document.querySelectorAll(".request_tab");
// const requests = document.querySelectorAll(".request");

// requestTabs.forEach(function (tab) {
//   tab.addEventListener("click", function () {
//     const clickedId = this.id.replace("request_tab", "request");

//     // Hide all requests
//     requests.forEach(function (request) {
//       request.style.display = "none";
//     });

//     // Show the clicked request
//     document.getElementById(clickedId).style.display = "block";
//   });
// });

// // Change focus (highlight) on owner requests tabs
// requestTabs.forEach(function (tab) {
//   tab.addEventListener("click", function () {
//     // Reset all tabs to default background color
//     requestTabs.forEach(function (t) {
//       t.style.backgroundColor = " var(--main-bg-color-3)";
//     });

//     // Highlight the clicked tab
//     this.style.backgroundColor = "var(--main-bg-color-1)";
//   });
// });

// create event //
// Add photos to the post
var post_photo = document.getElementById("post_photo");
var post_image_input = document.getElementById("post_image_input");

if (post_photo) {
  post_photo.addEventListener("click", function () {
    var fileInput = document.getElementById("post_image_input");
    if (fileInput) {
      fileInput.click();
    }
  });
}

if (post_image_input) {
  post_image_input.addEventListener("change", function () {
    var files = this.files;
    var insertedPhotos = document.getElementById("inserted_photos");
    // Check if the maximum number of photos has been reached
    if (insertedPhotos.children.length >= 4) {
      alert("You can only add up to 4 photos.");
      return;
    }
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
      reader.onload = function (e) {
        // Create a new image element
        var img = document.createElement("img");
        // Set the source attribute of the image
        img.src = e.target.result;
        // Append the image to the container
        insertedPhotos.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
}
