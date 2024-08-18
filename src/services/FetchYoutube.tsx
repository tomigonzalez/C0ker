type Props = {
  url: string;
};

const apiKey = import.meta.env.VITE_API_KEY_YOUTUBE;
const channelId = import.meta.env.VITE_CHANNEL_ID;

function getSuspender<T>(promise: Promise<T>) {
  let status = "pending";
  let response: T;

  const suspender = promise.then(
    (res: T) => {
      status = "success";
      response = res;
    },
    (err: T) => {
      status = "error";
      response = err;
    }
  );

  const read = (): T => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

const FetchYoutube = (props: Props) => {
  const promise = fetch(
    `${props.url}/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;

      return fetch(
        `${props.url}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => data);
    });

  return getSuspender(promise);
};

export default FetchYoutube;
