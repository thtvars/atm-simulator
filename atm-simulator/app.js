let usersArray = [
    { name: 'ivan', balance: 200, password: '123' },
    { name: 'majo', balance: 290, password: '456' },
    { name: 'cindy', balance: 67, password: '789' }
]
//log in container
const loginContainer = document.getElementById('login');
const accountContainer = document.getElementById('userName').value;
let flag = 0;

const logInButton = document.getElementById('logInButton');
logInButton.addEventListener('click', loginHandler);

const movementContainer = document.getElementById('movementContainer');
movementContainer.style.display = 'none';
const balanceContainer = document.getElementById('balanceContainer');
balanceContainer.style.display = 'none';
const enterAmountContainer = document.getElementById('enterAmountContainer');
enterAmountContainer.style.display = 'none';
const withdrawAmountContainer = document.getElementById('withdrawAmountContainer');
withdrawAmountContainer.style.display = 'none';

//const newBalanceDiv = document.getElementById('newBalanceDiv');

const checkBalance = document.getElementById('checkBalance');
const enterAmount = document.getElementById('enterAmount');
const withdrawAmount = document.getElementById('withdrawAmount');

//! Buttons of types of events
checkBalance.addEventListener('click', balanceFunction);
enterAmount.addEventListener('click', enterAmountFunction);
withdrawAmount.addEventListener('click', withdrawAmountFunction);


function loginHandler() {

    let userName = document.getElementById('userName').value;
    //console.log(userName);
    let pwdInput = document.getElementById('password').value;
    //console.log(pwdInput);

    const userSelected = usersArray.find((user) => user.name === userName)
    //console.log(userSelected);

    const pwdSelected = userSelected.password;

    if (pwdInput == pwdSelected) {

        console.log('you have logged in!');
        loginContainer.style.display = 'none';
        movementContainer.style.display = 'block';
    } else[
        console.log('User or password invalid'),
        alert('username or password invalid'),
        //need to empty userName and pwdInput
    ]
}

function balanceFunction() {
    balanceContainer.style.display = 'block';
    movementContainer.style.display = 'none';
    //Creating elements
    //const li = document.createElement('li');
    //li.textContent = 'first element';
    //appending child element to node
    //list.appendChild(li);

    //* finding user
    let userName = document.getElementById('userName').value;
    const userSelected = usersArray.find((user) => user.name === userName)
    //console.log(userSelected);

    //*creating a new element who gonna be the balance
    const currentBalance = document.getElementById('currentBalance');
    const balance = document.createElement('balance');
    balance.textContent = `${userSelected.balance}`;
    //*concatenating
    currentBalance.appendChild(balance);
}

function enterAmountFunction() {
    enterAmountContainer.style.display = 'block';
    movementContainer.style.display = 'none';

    //* finding user
    let userName = document.getElementById('userName').value;
    const userSelected = usersArray.find((user) => user.name === userName)
    //console.log(userSelected);

    //*finding position
    let position = 0;
    switch (userName) {

        case 'ivan':
            position = 0;
            break;

        case 'majo':
            position = 1;
            break;

        case 'cindy':
            position = 2;
            break;

        default:
            break;
    }

    ///! calculation button
    const quantityButton = document.getElementById('quantityButton')
    quantityButton.addEventListener('click', enterAmountCalculate)
    

    function enterAmountCalculate() {
        //newBalanceDiv.style.display = 'block';
        //*creating a new variable for store the quantity enter
        const quantityEnter = Number(document.getElementById('quantityEnter').value);
        //console.log(userSelected.balance + quantityEnter);
        //*calculating the new balance
        const newBalance = Number(userSelected.balance + quantityEnter);
        //*reassigning value
        usersArray[position].balance = newBalance;
        //console.log(usersArray[position].balance);

        //*creating a new elements who gonna be the new balance and amount enter
        const amount = document.getElementById('amount');
        const rstBalance = document.getElementById('newBalance');

        amount.style.display = 'inline';
        rstBalance.style.display = 'inline';

        //*storing text
        const amount1 = document.createElement('h4');
        const rstBalance1 = document.createElement('h4');
        amount1.textContent = `${quantityEnter}`;
        rstBalance1.textContent = `${newBalance}`

        //*concatenating
        amount.appendChild(amount1);
        rstBalance.appendChild(rstBalance1);

        //Creating elements
    //const li = document.createElement('li');
    //li.textContent = 'first element';
    //appending child element to node
    //list.appendChild(li);
    }
}



function withdrawAmountFunction() {
    withdrawAmountContainer.style.display = 'block';
    movementContainer.style.display = 'none';
}
























//const pwdSelected = usersArray.find((user) => user.password === pwdInput);
// console.log(pwdInput);

/*for (let i = 0; i < usersArray.length; i++){

    if (usersArray[i].name == userName){
        console.log(usersArray[i].name);
    }
}*/

/*let usersArray = [
    {
        name: ['Ivan', "Majo", "Cindy"],
        balance: [200, 290, 67]
    }
];*/

/*do {
    let user = prompt('User:');

    switch (user) {
        case 'ivan':
            console.log(`${usersArray[0].name} has $${usersArray[0].balance}`);
            flag = 1;

            let password = prompt('Input your password:')
            if (password == 'ivan123'){
                console.log('you are in')
            }
            break;

        case 'majo':
            console.log(`${usersArray[1].name} has $${usersArray[1].balance}`);
            flag = 1;
            break;

        case 'cindy':
            console.log(`${usersArray[2].name} has $${usersArray[2].balance}`);
            flag = 1;
            break;

        default:
            alert('Input a valid user');
            break;
    }
} while (flag == 0);
*/