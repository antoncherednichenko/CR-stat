import axios from "axios";

const baseURL: string =  'https://api.clashroyale.com/v1/'
const appKey: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImEwNzFmZTM5LWUxMzktNDA4MC05ZGVjLTQzYWNkMjdkYWI1YSIsImlhdCI6MTY1MTUxMTk1Niwic3ViIjoiZGV2ZWxvcGVyL2VkNGZlNThiLTE1MjktNGM0Yy1iYjQ4LWEwYjgwOTI2ZGQxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMzYuMTY5LjIyMS4xNjQiXSwidHlwZSI6ImNsaWVudCJ9XX0.zCzXr7zWsL-lI6dFHfisG6D8KIX7gnX5OA0PdHW8_hwvfbmQWSeAcGKIFX8jNJgXjbwJaEQND0I0rvXVSXKyLg'
const headers = {
    autorisation: 'Barear' + appKey
}

const cr = axios.create({
    baseURL,
    headers
})

export default cr