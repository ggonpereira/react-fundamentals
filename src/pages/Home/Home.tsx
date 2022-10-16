import { Logo } from "../../assets/icons";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./Home.styles";

import userAvatar from "../../assets/userPicture.jpg";
import userBackground from "../../assets/userBackground.jpg";
import { Post } from "../../components/Post/Post";

import { posts } from "../../constants/posts";

export const Home = () => (
  <>
    <Header logo={<Logo />} title="Techy Feed" />
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
            userAvatar={userAvatar}
            userName="Gabriel Pereira"
            userRole="Frontend Engineer"
            postContent={post.content}
            key={post.id}
          />
        ))}
      </S.MainContent>
    </S.Container>
  </>
);
