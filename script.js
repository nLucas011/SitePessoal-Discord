const url = 'https://api.lanyard.rest/v1/users/1067532640594448414' // definindo a url da api 

fetch(url) // usando o metodo fetch para fazer um req "get" na url da api.
 .then(res => { // pegando a response da api
    if(!res.ok) { // verificando se a api esta ok
     throw new Error(console.log("erro ao consumir a api")); // caso a api nao esteja correta, ira dizer isso.
    } 
  return res.json(); // converter a res para json - caso a res for ok
})
.then(data => { // pegando o banco de dados da api
    console.log(data); // imprimindo na console os dados - verifica se esta ok
    document.getElementById("main-name").textContent = data.data.discord_user.display_name; // pega o conteudo do ´main-name´ e recebendo o display_name da  api
    let avatar = data.data.discord_user.avatar // definindo o avatar na api
    let img = document.getElementById("profile") // pegando o elemento `profile`
    img.src = 'https://cdn.discordapp.com/avatars/1067532640594448414/' + avatar + '.png'; // colocando o link da imagem no src da img
    document.getElementById("username").textContent = data.data.discord_user.username // pegando o `username` e recebendo o username da api
})
.catch(error => {
    console.error('Erro:', error); // caso tenha algum erro vai imprimir no terminal/console.
});