const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
    const redPara = document.createElement('p')
    redPara.textContent = 'Hey I am red'
    redPara.style.color='red'
    const blueHeader = document.createElement('h3')
    blueHeader.textContent = 'Im a blue h3!'
    blueHeader.style.color='blue'
    const divStuff = document.createElement('div')
    const para = document.createElement('p')
    const headerH1 = document.createElement('h1')
    divStuff.setAttribute('style', 'background: pink; border: 1px solid black;')
    
    headerH1.textContent = "I'm in a div"
    para.textContent = "ME TOO!"
    divStuff.appendChild(headerH1)
    divStuff.appendChild(para)
    

    container.appendChild(content);
    container.appendChild(redPara);
    container.appendChild(blueHeader);
    container.appendChild(divStuff);

    // const btn = document.querySelector('#btn');
    // btn.onclick = () => alert("Hello World"); without eventlistener

    // const btn = document.querySelector('#btn');
    // btn.addEventListener('click', () => {
    // alert("Hello World");
    // }); using eventListener

    //using function and eventListener:
    // function alertFunction() {
    //     alert("YAY! YOU DID IT!");
    //   }

    // btn.addEventListener('click', alertFunction);

    //Using function(e) callback:
    // btn.addEventListener('click', function (e) {
    //   console.log(e.target);
    // }); outputs the html associated with the btn id


    // btn.addEventListener('click', function (e) {
    //   e.target.style.background = 'blue';
    // }); makes the background color of the button blue