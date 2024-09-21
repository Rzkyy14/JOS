
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ("Is it girlfriend's day? Yeeyy... Even though we are just friends, you always have a place in my little heart, I just want you to know that Im proud of you, happy to spend time with you, happy to do everything with you, are you like that too? HAHAHA, I wish we were the same, I know you like blue roses, But I only have these, HTML flowers, which will never break :). i hope you like it. I want our relationship to be the same as this flower, never ending. Thank you my cute little girl").split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 25); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};