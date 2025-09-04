
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
        btnTwo.style.borderRadius = '10px';
        btnTwo.style.cursor = 'pointer';
        btnTwo.style.padding = '20px';
        }else{
            btnTwo.style.borderRadius = '';
            btnTwo.style.cursor = '';
            btnTwo.style.padding = '';
        }
        toggled = !toggled;
    });