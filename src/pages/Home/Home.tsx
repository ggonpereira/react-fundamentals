import { Logo } from "../../assets/icons";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./Home.styles";

import userAvatar from "../../assets/userPicture.jpg";
import userBackground from "../../assets/userBackground.jpg";
import { Post } from "../../components/Post/Post";
import { useEffect, useState } from "react";

import axios from "axios";
import { Typography } from "../../components/Typography";

interface PostType {
  id: number;
  userAvatar: string;
  userName: string;
  userRole: string;
  postContent: string;
  publishedAt: Date;
}

export const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<PostType[]>(
          "https://mocki.io/v1/c6959083-93b5-4339-a00b-cf3585640823"
        );

        if (data) {
          setPosts(data);
        }
      } catch (error) {
        console.error(error);

        // TODO: treat errors
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header logo={<Logo />} title="Techy Feed" />

      {isLoading && <Typography>Loading posts...</Typography>}

      {!isLoading && (
        <S.Container>
          <Sidebar
            userAvatar={userAvatar}
            backgroundImage={userBackground}
            userName="Gabriel Pereira"
            userRole="Frontend Engineer"
            handleEditProfile={() => {
              console.info("Called");
            }}
          />

          <S.MainContent>
            {posts.map((post) => (
              <Post
                userAvatar={post.userAvatar}
                userName={post.userName}
                userRole={post.userRole}
                postContent={post.postContent}
                key={post.id}
                publishedAt={new Date(+post.publishedAt * 1000)}
              />
            ))}
          </S.MainContent>
        </S.Container>
      )}
    </>
  );
};
