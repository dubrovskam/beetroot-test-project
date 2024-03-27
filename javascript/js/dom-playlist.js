const domPlayList = () => {
  const DOMTitle = document.getElementById('js-title');
  const DOMList = document.getElementById('js-list');

  if (DOMTitle) {
    DOMTitle.style.color = 'blue';
    DOMTitle.style.marginLeft = '40px';
    DOMTitle.style.marginTop = '40px';
  }

  if (DOMList) {
    DOMList.classList.add('js-list');
    const addItemToList = (author, song) => {
      const li = document.createElement('li');
      li.classList.add('list-item');

      const spanAuthor = createSpan('author', `author: ${author}`);
      spanAuthor.classList.add('author');
      const spanSong = createSpan('song', `song: ${song}`);

      spanAuthor.style.color = 'dodgerBlue';

      li.appendChild(spanAuthor);
      li.appendChild(spanSong);

      DOMList.appendChild(li);
    };

    const playList = [
      { author: 'LED ZEPPELIN', song: 'STAIRWAY TO HEAVEN' },
      { author: 'QUEEN', song: 'BOHEMIAN RHAPSODY' },
      { author: 'LYNYRD SKYNYRD', song: 'FREE BIRD' },
      { author: 'DEEP PURPLE', song: 'SMOKE ON THE WATER' },
      { author: 'JIMI HENDRIX', song: 'ALL ALONG THE WATCHTOWER' },
      { author: 'AC/DC', song: 'BACK IN BLACK' },
      { author: 'QUEEN', song: 'WE WILL ROCK YOU' },
      { author: 'METALLICA', song: 'ENTER SANDMAN' },
    ];

    playList.forEach(({ author, song }) => addItemToList(author, song));
  }
};

const createSpan = (className, textContent) => {
  const span = document.createElement('span');
  span.classList.add(className);
  span.textContent = textContent;
  return span;
};

export default domPlayList;
