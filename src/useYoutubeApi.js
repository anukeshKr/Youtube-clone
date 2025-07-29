import { API_KEY, BASE_URL } from "./data";

export const fetchPopularVideos = async (categoryId = 0) => {
  try {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=50&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("YouTube API error", error);
    return [];
  }
};

export const fetchBySearch = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search?part=snippet&type=video&q=${query}&maxResults=20&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items;
};

export const fetchdata = async () => {
  try {
    const url = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setApi(data.items[0]);
  } catch (error) {
    console.error("Failed to fetch video details", error);
  }
};

export const fetchComments = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}&maxResults=10`
    );
    const data = await response.json();
    setComments(data.items);
  } catch (error) {
    console.error("Failed to fetch comments", error);
  }
};
