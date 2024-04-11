function customRender(reactElement , container )
{
    const docElement  = document.createElement(reactElement.type)

    docElement.innerText=reactElement.children
    docElement.setAttribute('href',reactElement.props.href)
    docElement.setAttribute('target' , reactElement.props.target)
    container.appendChild(docElement)
}



const reactElement = {
    type:'a',
    props:{
        href :'https://google.com',
        target:'_blank'
    } ,
    children : 'click me  to visit google here '
}

const maincontainer = document.querySelector('#root');

customRender(reactElement,maincontainer)