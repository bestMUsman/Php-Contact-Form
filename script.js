const targetNode = document.querySelector('body');
const config = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {
    document.querySelectorAll('img[alt="www.000webhost.com"]').forEach(item => item.closest('div').remove());
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
