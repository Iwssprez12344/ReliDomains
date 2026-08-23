function githubLogin() {
window.location.href = "https://github.com/login"
}

function connectRepository() {
alert("GitHub repository connection will be available once GitHub OAuth is configured.")
}

function addDomain() {
const domain = prompt("Enter your domain")
if (!domain) return
alert(domain + " has been added to your ReliDomains project queue.")
}
