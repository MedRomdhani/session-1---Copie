import { useEffect, useContext } from "react";

import ArticleContext from "./ArticleContext";

const ArticleList = () => {
  const { articles, getAllArticles, deleteArticle } =
    useContext(ArticleContext);

  useEffect(() => {
    getAllArticles();
  }, [articles]);

  return (
    <>
      <h1>Article ----- List</h1>

      {articles &&
        articles.map((article) => (
          <div key={article.id} className="my-5 align-items-lg-center">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button
              onClick={() => deleteArticle(article.id)}
              className="btn btn-outline-danger btn-sm"
            >
              delete
            </button>
          </div>
        ))}
    </>
  );
};

export default ArticleList;
