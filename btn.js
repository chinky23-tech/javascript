
// button 1 changes color &  text onclick
const btnColor = document.getElementById('btnColor');
    let toggled = false; // track button state

    btnColor.addEventListener('click', () => {
        if (!toggled) {
            // Change to red
            btnColor.style.backgroundColor = 'red';
            btnColor.style.boxShadow = '0 10px 20px -8px rgba(255,0,0,0.5)';
            btnColor.textContent = 'clicked';
            

        } else {
            // Back to original
            btnColor.style.backgroundColor = '';
            btnColor.style.boxShadow = '';
            btnColor.textContent = 'Color change';
            
        }
        toggled = !toggled; // flip state
    });

    // button 2 
    const btnTwo = document.getElementById('btnTwo');
    btnTwo.addEventListener('click', () =>{
        if(toggled){
    btnTwo.classList.toggle('px-10');
    btnTwo.classList.toggle('py-6');
    btnTwo.classList.toggle('text-xl');
    btnTwo.classList.toggle('cursor-pointer');
    btnTwo.classList.toggle('rounded-full');
    btnTwo.classList.toggle('ease-0.5s-all');
        }else{
            btnTwo.classList.remove('px-10', 'py-6', 'text-xl', 'cursor-pointer', 'rounded-full', 'ease-0.5s-all');
        }
       toggled  = !toggled;
    });