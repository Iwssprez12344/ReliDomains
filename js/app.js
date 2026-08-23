const GITHUB_CLIENT_ID = "Ov23lip83IlxrKLdH8mf"
const REDIRECT_URI = "https://iwssprez12344.github.io/ReliDomains/login.html"

function githubLogin() {
    const state = crypto.randomUUID()

    sessionStorage.setItem("github_oauth_state", state)

    const params = new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        state,
        scope: "read:user user:email"
    })

    window.location.href = `https://github.com/login/oauth/authorize?${params}`
}

function connectRepository() {
    githubLogin()
}

function addDomain() {
    const domain = prompt("Enter your domain")

    if (!domain) {
        return
    }

    alert(`${domain} has been added to your ReliDomains project queue.`)
}

function handleGitHubCallback() {
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    const state = params.get("state")
    const savedState = sessionStorage.getItem("github_oauth_state")

    if (!code) {
        return
    }

    if (!state || state !== savedState) {
        alert("GitHub authentication failed.")
        return
    }

    sessionStorage.removeItem("github_oauth_state")

    sessionStorage.setItem("github_oauth_code", code)

    window.location.href = "dashboard.html"
}

handleGitHubCallback()
