function BlogLink() {
    console.log(window.location.href)
    if (window.location.href == "http://127.0.0.1:4000/" | window.location.href == "https://whatiswrongwithmycomputer.co.uk/") {
        document.getElementById("content").scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
        window.location.href = "/"
    }
}