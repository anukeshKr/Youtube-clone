export const API_KEY = "AIzaSyAbZxi1F-vo2zY9BhvNO-PVOOA7Zh6i3_I";
export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export function convertViews(views) {
  if (views >= 1_000_000) {
    return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M views';
  } else if (views >= 1_000) {
    return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K views';
  } else {
    return views + ' views';
  }
}

export const formatCount = (num) => {
        if (!num) return "0";
        num = parseInt(num);
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num.toString();
};