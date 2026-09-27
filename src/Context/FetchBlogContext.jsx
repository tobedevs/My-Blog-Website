import { createContext, useContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../Firebase";

const FetchBlogContext = createContext();

export const FetchBlogProvider = ({ children }) => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          firebaseId: doc.id,
          ...doc.data(),
        }));

        console.log("FIREBASE DATA:", data);

        setBlogs(data);
      },
      (error) => {
        console.error("FIRESTORE ERROR:", error);
        toast.error(error.message);
      }
    );

    return () => unsub();
  }, []);

  return (
    <FetchBlogContext.Provider value={{ Blogs }}>
      {children}
    </FetchBlogContext.Provider>
  );
};

export const useFetchedBlogs = () => {
  return useContext(FetchBlogContext);
};