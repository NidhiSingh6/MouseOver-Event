const spanx=document.querySelector('#spanx')
const spany=document.querySelector('#spany')

window.addEventListener('mouseover',(e)=>{
    console.log(e);
    const xClient=e.clientX
    const yClient=e.clientY
    spanx.textContent=xClient
    spany.textContent=yClient
})
