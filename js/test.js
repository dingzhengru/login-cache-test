
const bodyElement = document.getElementsByTagName('body')[0]
const pElement = document.createElement('p')
const node = document.createTextNode('import test.js')

pElement.appendChild(node)
bodyElement.appendChild(pElement)
