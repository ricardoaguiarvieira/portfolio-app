function ContentInstagran (){ 
    // const json = JSON.stringify(dadosCliente)
    return fetch(`https://www.instagram.com/ricardoaguiarfbc/?__a=1`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        // body: json,
        // credentials: "include"
    }).then((response) => {
        return response.json();
    })
}
// function text(){
//     var oReq = new XMLHttpRequest();
//     var url = 'https://www.instagram.com/tatyaraujo9';

//     oReq.open("GET", url, true);
//     oReq.responseType = "arraybuffer";
//     oReq.onload = function(e) {
//     var arraybuffer = oReq.response; // não é responseText
//     /* ... */
//     console.log("e", e);
//     console.log("arr", arraybuffer);
//     return arraybuffer;
//     }
//     oReq.send();
// }
export { ContentInstagran };