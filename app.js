console.log("ASSALAM O ALIKUM");
async function loadData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    console.log(data);
    function tableGenerate() {
        var table = document.getElementById('myTable')
        data.forEach(element => {
            var row = `<tr>
                <td>${element.postId} </td>
                <td>${element.id} </td>
                <td>${element.name} </td>
                <td>${element.body} </td>
                   </tr>
                `
            table.innerHTML += row;
        });
    }
    tableGenerate();
}
loadData()

function searchValue() {
    var hideTable = document.getElementById('tableData');
    hideTable.style.display = 'none'
    var table = document.getElementById('SearchTable')
    var inputValue = document.getElementById('inputValue').value;
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`)
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                console.log(element.name)
                var row = `<tr>
                <td>${element.postId} </td>
                <td>${element.id} </td>
                <td>${element.name} </td>
                <td>${element.body} </td>
              </tr>
           `
                table.innerHTML += row;
            })
            // console.log(json.name)
            // var row = `<tr>
            //      <td>${json.postId} </td>
            //      <td>${json.id} </td>
            //      <td>${json.name} </td>
            //    </tr>
            // `
            // table.innerHTML += row;
        })
}
function clearbtn(){
    location.reload();
}
// function tableGenerate() {
//     fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(element => {
//             var row = `<tr>
//                  <td>${element.userId} </td>
//                  <td>${element.id} </td>
//                  <td>${element.title} </td>
//                </tr>
//             `
//             table.innerHTML += row;
//         });
//     })
//     // array.forEach(element => {
//     //     var row = `<tr>
//     //          <td>${element.name} </td>
//     //          <td>${element.name} </td>
//     //          <td>${element.name} </td>
//     //        </tr>
//     //     `
//     //     table.innerHTML += row;
//     // });
// }
// tableGenerate();
// //    <td>${array[element].name} </td>
// //    <td>${array[element].name} </td>