import axios from "axios";

const BASE_URL = "https://674726fc38c8741641d5a162.mockapi.io/comment";

interface Comment {
  id: string;
  name: string;
  content: string;
}

const getAllComment = async (): Promise<Comment[]> => {
  try {
    const response = await axios.get<Comment[]>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

const addComment = async (name: string, content: string): Promise<Comment | null> => {
  try {
    const response = await axios.post<Comment>(BASE_URL, {
      name,
      content,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    return null;
  }
};

export { getAllComment, addComment, type Comment };
