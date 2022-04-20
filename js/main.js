function getTableOfContents() {
    let list = document.getElementById("main-list");
    const links = [
        {
            label: "Week 1 Notes", 
            url: "week1/index.html"
        }
    ]  
    links.forEach(element => {
        console.log('I am in the for each statement');
        let li = document.createElement("li");
        let label = element.label;
        let url = element.url;
        li.innerHTML = "<a href='" + url + "'>" + label + "</a>";
        list.appendChild(li);
    });
}