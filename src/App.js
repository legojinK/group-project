import "@/App.css";
import { Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdoptGuidePage from "./pages/AdoptGuidePage/AdoptGuidePage";
import SheltersPage from "./pages/SheltersPage/SheltersPage";
import AnimalsPage from "./pages/AnimalsPage/AnimalsPage";
import AnimalDetailPage from "./pages/AnimalDetailPage/AnimalDetailPage";
import AnimalLikePage from "./pages/AnimalLikePage/AnimalLikePage";
import NotFound from "./pages/NotFound/NotFound";
import store from "./store/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* 메인 페이지 */}
          <Route index element={<HomePage />} />
          {/* 로그인 페이지 */}
          <Route path="login" element={<LoginPage />} />
          <Route path="guide" element={<AdoptGuidePage />} />
          <Route path="shelters" element={<SheltersPage />} />

          <Route path="animals">
            {/* 동물 리스트 페이지 */}
            <Route index element={<AnimalsPage />} />
            {/* 동물 상세 페이지 */}
            <Route path=":id" element={<AnimalDetailPage />} />
            {/* 관심 동물 페이지 */}
            <Route path="like" element={<AnimalLikePage />} />
          </Route>
        </Route>

        {/* 이외의 경로로 잘못 들어온 경우 404페이지 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
