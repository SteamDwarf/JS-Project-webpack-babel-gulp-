const tabs = () => {
    function bindTabs(wrapperSelector, headerSelector, contentSelector, activeClass) {
        const tabWrapper = document.querySelector(wrapperSelector),
              tabHeader = document.querySelectorAll(headerSelector),
              tabContent = document.querySelectorAll(contentSelector);
        
        function hideContent() {
            tabContent.forEach(item => {
                item.style.cssText = 'display: none';
            });
            tabHeader.forEach(item => {
                item.classList.remove(activeClass);
            });
        }

        function showContent(i = 0) {
            hideContent();
            tabContent[i].style.cssText = 'display: block';
            tabHeader[i].classList.add(activeClass);
        }

        tabWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains(headerSelector.replace(/\./,'')) ||
                e.target.parentNode.classList.contains(headerSelector.replace(/\./,''))) {
                tabHeader.forEach((tab, i) => {
                    if (e.target === tab || e.target.parentNode === tab) {
                        showContent(i);
                    }
                });
            }
        });

        showContent();
    }

    bindTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    bindTabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
};

export default tabs;