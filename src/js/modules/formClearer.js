const formClearer = (formObject) => {

    function tabsClearer(tabsSelector, contentSelector, activeClass) {
        const tabs = document.querySelectorAll(tabsSelector),
              content = document.querySelectorAll(contentSelector);
        
        console.log(tabs, content);
        
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
        content.forEach(item => {
            item.style.cssText = 'display: none';
        });

        tabs[0].classList.add(activeClass);
        content[0].style.cssText = 'display: block';
    }

    function inputClearer(inputIds) {
        inputIds.forEach(id => {
            const input = document.querySelector(id);
            input.value = '';
        });
    }

    function seletClearer(selectsSelectors) {
        selectsSelectors.forEach(selector => {
            const select = document.querySelector(selector);
            select.selectedIndex = 0;
        });
    }

    function checkboxClearer(checkboxSelectors) {
        console.log(checkboxSelectors);
        checkboxSelectors.forEach(selector => {
            const checkbox = document.querySelector(`[${selector}]`);
            console.log(checkbox);
            checkbox.checked = false;
        });
    }

    for(let key in formObject) {
        switch(key) {
            case 'tabs':
                tabsClearer(formObject[key][0], formObject[key][1], formObject[key][2]);
                break;

            case 'inputs':
                inputClearer(formObject[key]);
                break;
            
            case 'select':
                seletClearer(formObject[key]);
                break;

            case 'checkbox':
                console.log(formObject[key]);
                checkboxClearer(formObject[key]);
                break;
        }
    }
};

export default formClearer;