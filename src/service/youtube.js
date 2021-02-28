class Youtube {
	constructor(httpClient) {
    this.youtube = httpClient;
    /* this.youtube = axios.create({
      baseURL:'https://www.googleapis.com/youtube/v3',
      params: { key: key},
    }); */
    };

	async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    })
    return response.data.items;
	}

	async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
        type: 'video'
      },
    })
    .catch(err => console.log(err));
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
	}
}

export default Youtube;
