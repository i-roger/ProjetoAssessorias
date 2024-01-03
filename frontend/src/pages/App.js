import { getFunction, postFunction, deleteFunction} from '../services/APIservice'

export default function App() {

    function btnGetFunctionClick() { //MODIFICADO!!! POR MIM.
        let groupList = document.getElementById("groupList");
        let users = document.getElementById("users");

        if (users.contains(groupList)) {
            groupList.parentNode.removeChild(groupList);

            getFunction()
            .then(data => {
                data.map((user) => {groupList.innerHTML += `<li id="listaUser"> ID: ${user.id} NOME: ${user.user} PASSWORD: ${user.password}</li>`;})  
            })
            .catch(err => console.log(err));
        } else {
            let groupList = document.createElement("div");
            groupList.id = "groupList";
            users.appendChild(groupList);
            
            getFunction()
            .then(data => {
                data.map((user) => {groupList.innerHTML += `<li id="listaUser"> ID: ${user.id} NOME: ${user.user} PASSWORD: ${user.password}</li>`;})  
            })
            .catch(err => console.log(err));
        }
    }

    function btnPostFunctionClick() {
        postFunction()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }


    // Consertar função de deletar usuário -> Provavelmente pegar id com useState e passar na URL no PARAMS
    function btnDeleteFunctionClick() {
        deleteFunction()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return (
        <>
        <div>        
            <button onClick={btnGetFunctionClick}>Get Function</button>
        </div>
        <div id="users">
            <div id="groupList"></div>
        </div>

        <div>
            <button onClick={btnPostFunctionClick}>Get PostFunction</button>
        </div>
        <div>
            <button onClick={btnDeleteFunctionClick} on>Get DeleteFunction</button>
            <input type="number" id="id"></input>
        </div>
        </>
    )
}