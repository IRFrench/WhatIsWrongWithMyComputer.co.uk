function fixTags() {
    const tags = document.getElementById("tags");

    const tagList = tags.textContent.split(" ")
    var tagLine = "Tags: ";

    for (var tag in tagList) {
        tagLine = tagLine + "#" + tagList[tag];

        if (tag != tagList.length - 1) {
            tagLine = tagLine + " - ";
        }
    }

    tags.textContent = tagLine;
}

function calcuateReadTime() {
    blog = document.getElementById("blog");
    readTime = document.getElementById("read-time")

    entire_blog = blog.textContent.split(" ")
    readTime.textContent = "Read Time: " + Math.round(entire_blog.length / 238 + 1) + " Minutes"
}


fixTags()
calcuateReadTime()