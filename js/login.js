function login() {
    var username = document.getElementById("username").value;
    if (username == "mbarson@school.edu")  // parent login
        window.location = "studentSelect.html";
    else if (username == "fbarson@school.edu") // student login
        window.location = "overview.html";
    else
        return
}