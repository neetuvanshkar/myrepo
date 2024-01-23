import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Registration from "./Registration";
import StudentDashboard from "./StudentDashboard";
import LoaderDashboard from "./LoaderDashboard";
import StudentComplain from "./StudentComplain";
import AdminDashboard from "./AdminDashboard";
import SeeComplain from "./SeeCoplain";
import AdminChangePassword from "./AdminChangePassword";
import ReplyAns from "./ReplyAns";
import SeeStuAnswer from "./SeeStuAnswer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Registration />} />
            <Route path="/studashboard" element={<LoaderDashboard />}>
              <Route exact path="stucomplain" element={<StudentComplain />} />
              <Route exact path="sturesponse" element={<SeeStuAnswer />} />
            </Route>
            <Route path="admindashboard" element={<AdminDashboard />}>
              <Route path="stucomp" element={<SeeComplain />} />
              <Route path="adminchnagepass" element={<AdminChangePassword />} />
              <Route path="repans/:id" element={<ReplyAns />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
