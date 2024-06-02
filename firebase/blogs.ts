import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './fireBaseConfig';
import { Blog } from '@/interface/blog';

// Get all blogs
export const getBlogs = async (): Promise<Blog[]> => {
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  return querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data()
      } as Blog)
  );
};

// Get a single blog by id
export const getBlog = async (id: string): Promise<Blog | undefined> => {
  const blogRef = doc(db, 'blogs', id);
  const blogDoc = await getDoc(blogRef);
  return blogDoc.exists()
    ? ({ id: blogDoc.id, ...blogDoc.data() } as Blog)
    : undefined;
};
