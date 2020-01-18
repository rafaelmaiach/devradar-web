export default function scrollToContent(selector, isSmoothScroll = true) {
  document.querySelector(selector).scrollIntoView({
    behavior: isSmoothScroll ? 'smooth' : '',
  });
};
