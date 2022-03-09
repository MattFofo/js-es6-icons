const eleMain = document.querySelector('.main');


//ciclo per scorrere gli oggetti dell'arrey e 
arrStartingData.forEach(element => {
    const eleBox = document.createElement('div');
    eleBox.classList.add('box');

    let iconClass = element.family + ' ' + element.prefix + element.name; //ricavo la classe dell'icona
    const eleIcon = `<i class="${iconClass}"></i>` //creo l'icona
    eleBox.innerHTML = element.name + ' ' + eleIcon;

    eleMain.append(eleBox);
});

