class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyASmKtEI9wy5QhLI3UviyuW1HNKCzHhrZU",
        this.getRequestOptions
      )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyASmKtEI9wy5QhLI3UviyuW1HNKCzHhrZU`,
        this.getRequestOptions
      )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({
          ...item,
          id: item.id.videoId
        }))
      );
  }
}
export default Youtube;