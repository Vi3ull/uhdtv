function findVideos() {
  let $videos = document.querySelectorAll('.video');

  if ($videos.length == 0) 
    return

  for (let i = 0; i < $videos.length; i++) {
      setupVideo($videos[i]);
  }
}

function setupVideo(video) {
  const $link = video.querySelector('.video__link');
  const $media = video.querySelector('.video__media');
  const $button = video.querySelector('.video__button');
  const $id = parseMediaURL($media);

  video.addEventListener('click', () => {
      let iframe = createIframe($id);

      $link.remove();
      $button.remove();
      video.classList.add('video--active');
      video.appendChild(iframe);
  });

  $link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  if (match == null) {
    console.error(`Не удалось обработать URL: ${url}`)
    return
  }

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export default findVideos();