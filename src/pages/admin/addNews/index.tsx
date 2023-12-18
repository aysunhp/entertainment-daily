import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewNews } from "../../../redux/slice/newsSilce";
import axios from "axios";

interface NewsType {
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

const AddNews = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [urlToImage, setUrlToImage] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={author}
          placeholder="Enter news author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          value={title}
          placeholder="Enter news title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={description}
          placeholder="Enter news description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          value={content}
          placeholder="Enter news content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input
          type="text"
          value={url}
          placeholder="Enter news url"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          type="text"
          value={urlToImage}
          placeholder="Enter news urlToImage"
          onChange={(e) => {
            setUrlToImage(e.target.value);
          }}
        />
        <input
          type="text"
          value={category}
          placeholder="Enter news category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            let date = new Date();
            let obj: NewsType = {
              author: author,
              title: title,
              description: description,
              url: url,
              urlToImage: urlToImage,
              publishedAt: String(date.getTime()),
              category: category,
              content: content,
              numberOfNews: 0,
              likedNumber: 0,
              dislikedNumber: 0,
              id: uuidv4(),
            };
            dispatch(addNewNews(obj));
            axios.post(
              "https://657f53116ae0629a3f53367d.mockapi.io/api/entertainment",
              obj
            );

            setAuthor("");
            setTitle("");
            setDescription("");
            setUrl("");
            setUrlToImage("");
            setCategory("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddNews;
