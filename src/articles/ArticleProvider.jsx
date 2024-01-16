import { useReducer } from 'react'
import ArticleContext from './ArticleContext'
import axios from "axios";
import Swal from "sweetalert2";
import ArticleReducer from './ArticleReducer';

const ArticleProvider = ({children}) => {

  const initialState = {articles: ""}
  const [state, dispatch] = useReducer(ArticleReducer, initialState)



  const getAllArticles = async () => {
    try {
      const respense = await axios.get("http://localhost:4000/articles");
      dispatch({type: "GETALL", res: respense.data});
    } catch (error) {
      console.error(error);
    }
  };

  
  const deleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        try {
          const respense = await axios.delete(
            `http://localhost:4000/articles/${id}`
          );
          if (respense.status === 200) {
            dispatch({type: "DELETE", article: respense.data.id})
          }
        } catch (error) {
          console.error();
        }
      }
    });

  };


  return (
    <>
      <ArticleContext.Provider value={{articles: state.articles, getAllArticles, deleteArticle}}>
        {children}
      </ArticleContext.Provider>
    </>
  )
}

export default ArticleProvider