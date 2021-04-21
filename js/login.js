function login() {
    var username = document.getElementById("username").value;
    if (username == "mbarson@siue.edu")  // parent login
        window.location = "studentSelect.html";
    else if (username == "fbarson@siue.edu") // student login
        window.location = "overview.html";
    else
        return
}