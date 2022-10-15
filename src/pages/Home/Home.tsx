import { Logo } from "../../assets/icons";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./Home.styles";

import userAvatar from "../../assets/userPicture.jpg";
import userBackground from "../../assets/userBackground.jpg";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        felis velit. Suspendisse ac condimentum felis, ac viverra enim. Maecenas
        vel congue purus. Quisque molestie ipsum in ullamcorper consequat. Nunc
        aliquam, nibh vel accumsan pulvinar, erat orci pulvinar diam, non
        lobortis dui purus sed nisi. Duis malesuada neque a augue bibendum, vel
        varius ante imperdiet. In augue risus, ullamcorper nec pellentesque
        quis, molestie at eros. Nam vel pretium elit, et scelerisque sapien.
        Donec elementum elementum augue id faucibus. In consequat aliquet ligula
        sit amet euismod. Vivamus faucibus tempus purus, vel suscipit arcu. Duis
        vel rhoncus lorem, at lobortis orci. Phasellus vitae molestie justo, sit
        amet lobortis eros. Maecenas arcu risus, fringilla sed efficitur id,
        consequat sed magna. Sed sapien libero, sollicitudin eget fermentum at,
        consequat sed ante. Mauris finibus, urna nec sollicitudin porttitor,
        sapien augue mattis purus, sed faucibus velit nunc non diam. Donec
        venenatis lacus feugiat justo luctus aliquet. Quisque scelerisque purus
        auctor mauris lobortis blandit. Aenean sodales finibus lorem.
        Suspendisse porta augue vitae molestie pretium. Vivamus ac tellus vel
        nibh iaculis molestie. Quisque vitae dui eu dolor auctor fringilla.
        Praesent sit amet magna et ligula sollicitudin scelerisque eu eget
        lectus. Curabitur tincidunt, lectus vel consectetur congue, tellus magna
        tristique quam, at rutrum sapien dui efficitur elit. Integer cursus
        volutpat dui ac euismod. Vestibulum viverra quam vulputate nunc dictum,
        non aliquet lorem maximus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Suspendisse vulputate
        condimentum augue, et iaculis elit semper at.
      </S.MainContent>
    </S.Container>
  </>
);
