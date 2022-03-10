const eleMain = document.querySelector('.main');

const eleIconTypeSelector = document.getElementById('icons-type-selector');


//funzione per renderizzare le icons
 function renderIcons(arrIcons, eleContainerIcons) {

     eleContainerIcons.innerHTML = '';

     //ciclo per scorrere gli oggetti dell'arrey e creare l'elemento box
     arrIcons.forEach(element => {
     const eleBox = document.createElement('div');
     eleBox.classList.add('box');

     const iconClass = element.family + ' ' + element.prefix + element.name; //ricavo la classe dell'icona
     eleBox.innerHTML = `
             <i class="${iconClass}" style="color: ${element.color}"></i>
             <span>${element.name}<span>
         `;
    
     eleMain.append(eleBox);
     });
    
 }


//stampo tutte le icone
renderIcons(arrStartingIcons, eleMain);



eleIconTypeSelector.addEventListener('change', function () {
    
    
    const iconTypeSelected = this.value;
    console.log(iconTypeSelected)

    if (iconTypeSelected != "all") {
            const arrFilteredIcons = arrStartingIcons.filter((icon) => {
            if (icon.type == iconTypeSelected) {
                return true;
                
            }    
        });
        renderIcons(arrFilteredIcons, eleMain);    
        
    }else {
        renderIcons(arrStartingIcons, eleMain);
    }

});

