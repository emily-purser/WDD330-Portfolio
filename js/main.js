function getTableOfContents() {
    var List = document.getElementsById("main-list");
    const links = [
        {
            label: "Week 1 Notes", 
            url: "week1/index.html"
        }
    ]
    let dataTable;
    links.forEach(element => {
        console.log('I am in the for each statement');
        dataTable = `<li class="table-links">`;
        dataTable += `<a href='/WDD330-Portfolio/${element.url}>${element.label}</a>`;
        dataTable += `</li>`;
    });
    List.innerHTML = dataTable;
}