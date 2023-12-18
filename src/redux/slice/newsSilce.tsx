// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// export interface NewsType {
//   author: string;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string;
//   publishedAt: string;
//   category: string;
//   content: string;
//   numberOfNews: number;
//   likedNumber: number;
//   dislikedNumber: number;
//   id: string;
// }

// export interface NewsState {
//   news: NewsType;
//   allNews: NewsType[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: NewsState = {
//   news: {
//     author: " ",
//     title: " ",
//     description: " ",
//     url: " ",
//     urlToImage: " ",
//     publishedAt: " ",
//     category: " ",
//     content: " ",
//     numberOfNews: 0,
//     likedNumber: 0,
//     dislikedNumber: 0,
//     id: " ",
//   },
//   allNews: [],
//   loading: false,
//   error: null,
// };

// export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
//   try {
//     const response = await axios.get<NewsType[]>(
//       "https://657f53116ae0629a3f53367d.mockapi.io/api/entertainment"
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch news data");
//   }
// });

// export const newsSlice = createSlice({
//   name: "news",
//   initialState,
//   reducers: {
//     addNewNews: (state, action: PayloadAction<NewsType>) => {
//       console.log(action.payload);
//       state.news = action.payload;
//     },
//     setAllNews: (state, action: PayloadAction<NewsType[]>) => {
//       console.log(action.payload);
//       state.allNews = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchNews.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchNews.fulfilled, (state, action) => {
//       state.loading = false;
//       state.allNews = action.payload;
//     });
//     builder.addCase(fetchNews.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message || "Failed to fetch news";
//     });
//   },
// });

// export const { addNewNews, setAllNews } = newsSlice.actions;

// export default newsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface NewsType {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  category: string;
  content: string;
  numberOfNews: number;
  likedNumber: number;
  dislikedNumber: number;
  id: string;
}

export interface NewsState {
  news: NewsType;
  allNews: NewsType[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: {
    author: " ",
    title: " ",
    description: " ",
    url: " ",
    urlToImage: " ",
    publishedAt: " ",
    category: " ",
    content: " ",
    numberOfNews: 0,
    likedNumber: 0,
    dislikedNumber: 0,
    id: " ",
  },
  allNews: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  console.log("salam");
  try {
    const response = await axios.get<NewsType[]>(
      "https://657f53116ae0629a3f53367d.mockapi.io/api/entertainment"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch news data");
  }
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNewNews: (state, action) => {
      console.log(action.payload);
      state.news = action.payload;
    },
    setAllNews: (state, action) => {
      console.log(action.payload);
      state.allNews = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.allNews = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch news";
    });
  },
});

export const { addNewNews, setAllNews } = newsSlice.actions;

export default newsSlice.reducer;
