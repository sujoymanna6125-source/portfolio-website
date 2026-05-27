document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.toggle-btn').forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        document.querySelectorAll('.toggle-section').forEach(section => {
          section.classList.add('d-none'); // Hide all sections
        });
        const target = document.getElementById(targetId);
        if (target) target.classList.remove('d-none'); // Show selected section
      });
    });
  });


// Restrict name input to letters and spaces only
document.getElementById("name").addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-z\s]/g, '');
});

// Allow normal email typing (no restriction)
document.getElementById("email").addEventListener("input", function () {
  this.value = this.value.trim();
});

async function submitvalues(event) {
  event.preventDefault();

  // Get input values
  const Username = document.getElementById("name").value.trim();
  const Gmailid = document.getElementById("email").value.trim();
  const Message = document.getElementById("message").value.trim();

  // ---- Name Validation ----
  const nameRegex = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/;
  if (!nameRegex.test(Username)) {
    alert("Name must start with a capital letter and contain only alphabets and spaces.");
    return;
  }

  if (/^(.)\1+$/.test(Username.replace(/\s/g, ""))) {
    alert("Invalid name — cannot contain all repeating letters like 'aaaaa'.");
    return;
  }

  if (/\s{2,}/.test(Username)) {
    alert("Invalid name — no multiple spaces allowed.");
    return;
  }

  // ---- Gmail Validation ----
  const gmailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;

  if (/[A-Z]/.test(Gmailid)) {
    alert("Email cannot contain capital letters. Please use all lowercase.");
    return;
  }

  if (!gmailRegex.test(Gmailid)) {
    alert("Email must be a valid Gmail address ending with @gmail.com.");
    return;
  }

 // ---- Message Validation ----
const wordCount = Message.trim().split(/\s+/).length;

if (wordCount < 5) {
  alert("Message must contain at least 5 words.");
  return;
}


  // ✅ Success feedback
  alert("Message sent successfully!");
  document.getElementById("signupForm").reset();
}


function showWorkingMessage() {
      alert("Project not deployed! 🚀");
    }
