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

    ///! calculation button activation
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

        //*storing text
        const amount1 = document.createElement('h4');
        const rstBalance1 = document.createElement('h4');
        amount1.textContent = `${quantityEnter}`;
        rstBalance1.textContent = `${newBalance}`;

        //*concatenating
        amount.appendChild(amount1);
        rstBalance.appendChild(rstBalance1);

        bussinesRules();
}
}

function withdrawAmountFunction() {
    withdrawAmountContainer.style.display = 'block';
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

    ///! calculation button activation
    const quantityRetireButton = document.getElementById('quantityRetireButton');
    quantityRetireButton.addEventListener('click', retireAmountCalculate);

    function retireAmountCalculate(){
        //*creating a new variable for store the quantity retired
        const quantityRetire = Number(document.getElementById('quantityRetire').value);
        //*calculating the new balance
        const newBalance = Number(userSelected.balance - quantityRetire);
        //*reassigning value
        usersArray[position].balance = newBalance;
        console.log(usersArray[position].balance);

        //*creating a new elements who gonna be the new balance and amount retired
        const retire = document.getElementById('retire');
        const newBalanceRetire = document.getElementById('newBalanceRetire');

        //*storing text
        const retire1 = document.createElement('h4');
        const newBalanceRetire1 = document.createElement('h4');
        retire1.textContent = `${quantityRetire}`;
        newBalanceRetire1.textContent = `${newBalance}`;

        //*concatenating
        retire.appendChild(retire1);
        newBalanceRetire.appendChild(newBalanceRetire1);

        bussinesRules();
    }

    
}

function bussinesRules (){
    for(let i = 0; i <usersArray.length; i++){
        if(usersArray[0].balance < 10 || usersArray[0].balance > 990){
            alert('@user does not have enough money');
            console.log(usersArray[0].balance);
        }
    }
}
