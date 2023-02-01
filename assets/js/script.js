const animalSvg = () => {
    function binSvg(animalSelector, infoBody, infoWeight, infoQuantity){

        let partCell = document.querySelector('#part');
        let weightCell = document.querySelector('#weight');
        let quantityCell = document.querySelector('#quantity')

        const part = document.querySelectorAll(animalSelector)
        part.forEach( element => {
            element.addEventListener('mouseover', function() {
                let dataBody = element.getAttribute(infoBody);
                let dataWeight = element.getAttribute(infoWeight);
                let dataQuantity = element.getAttribute(infoQuantity);

                partCell.innerText = dataBody;
                weightCell.innerText = dataWeight;
                quantityCell.innerText = dataQuantity;
            })
        })


    }

binSvg('.chicken-part', 'data-body-chicken', 'data-weight-chicken', 'data-quantity-chicken')
binSvg('.pig-part', 'data-body-pig', 'data-weight-pig', 'data-quantity-pig')
binSvg('.cow-part', 'data-body-cow', 'data-weight-cow', 'data-quantity-cow')
}

animalSvg()

const tabHeader = document.querySelectorAll('.animals__item');
const tabContent = document.querySelectorAll('.animals-build');
const tabInfo = document.querySelector('.animals-info');

for (let item of tabHeader) {

    item.addEventListener('click', function () {

        for (let item of tabContent) {
            item.classList.add('hidden');
            tabInfo.classList.add('hidden');
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden');
        tabInfo.classList.remove('hidden');
    })
}