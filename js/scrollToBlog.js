function BlogLink() {
    console.log(window.location.href)
    if (window.location.href == "https://www.whatiswrongwithmycomputer.co.uk/" | window.location.href == "https://whatiswrongwithmycomputer.co.uk/") {
        document.getElementById("content").scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
        window.location.href = "/"
    }
}