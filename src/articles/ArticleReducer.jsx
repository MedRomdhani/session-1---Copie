function ArticleReducer(state, action) {
  
  switch (action.type) {
    case "GETALL":
      return ({ ...state, articles: action.res});
    case "DELETE":
      return { ...state, articles: state.articles.filter((article) => article.id !== action.id) };
    default:
      return state;
  }
}

export default ArticleReducer;
