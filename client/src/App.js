import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { io } from "socket.io-client";
import ProtectedRoutes from "./components/ProtectedRoutes";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
//Landing Page
import Navbar_landingpage from "./components/Navbar_landingpage";
import Forgot_password from "./pages-landing/Forgot_password";
import EmailVerification from "./pages-landing/EmailVerification";

//Dashboard
import Dashboard from "./Dashboard/Dashboard";
//Rooms
import Rooms from "./Rooms/Rooms";
import View_activity from "./Rooms/Activities/ProfActivityLayout/View_activity";
import Activity_viewed from "./Rooms/Activities/StudentsActivtityLayout/View/Activity_viewed";
import ExamViewedV2 from "./Rooms/Activities/StudentsActivtityLayout/View/ExamViewedV2";
import QuizViewedV2 from "./Rooms/Activities/StudentsActivtityLayout/View/QuizViewedV2/QuizViewedV2";
import Room_inside from "./Rooms/Room-content-layout/Room_inside";

//Records & Classcards
import Records from "./Records/Records";
import ClassCards_main from "./Records/Classcards/ClassCards_main";
import Evaluation from "./Records/Classcards/Evaluation";
import EvaluationV2 from "./Records/Classcards/EvaluationV2";

//Setting
import Settings from "./Settings/Settings";

//Telecon
import TeleconStart from "./Telecon/TeleconStart";
import TeleconRoomV2 from "./Telecon/TeleconRoomV2";
import LiveQuiz from "./Telecon/LIVE QUIZ/LiveQuiz";
import LivequizQuestion from "./Telecon/LIVE QUIZ/LivequizQuestion";
import LivequizStudentrankings from "./Telecon/LIVE QUIZ/LivequizStudentrankings";

//Quizlit
import QuizLit from "./Quizlit/Quizlit";
import Quizform from "./Quizlit/Quiz&ExamForm/Quizform";
import Examform from "./Quizlit/Quiz&ExamForm/Examform";
import Livequiz_multiplechoice from "./Quizlit/LiveQuiz/Livequiz_multiplechoice";
import Notifications_viewall from "./Notifications/Notifications_viewall";
import Exam_take from "./Dashboard/Exam_take";
import Exam_start from "./Dashboard/Exam_start";
import ExamSubmitted from "./Dashboard/ExamSubmitted";
import ExamAutosubmit from "./Dashboard/ExamAutosubmit";
import View_quiz from "./Quizlit/Quizbank-content-layout/Quizbank-view/View_quiz";
import ViewQuizV2 from "./Quizlit/Quizbank-content-layout/Quizbank-view/ViewQuizV2/ViewQuizV2";
import View_exam from "./Quizlit/Quizbank-content-layout/Quizbank-view/View_exam";
import JoinQuiz from "./Quizlit/TestComponents/JoinQuiz";
import ToLobby from "./Quizlit/TestComponents/ToLobby";
import Lobby from "./Quizlit/TestComponents/Lobby";
import Notfound from "./Notfound";
import TeleconLanding from "./pages-landing/TeleconLanding";
import QuizGameSetup from "./pages-landing/QuizGameSetup";
// Student Side
import TeleconGroup from "./pages-landing/TeleconGroup";
import LiveQuizSetup from "./Telecon/LiveQuizSetup";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      color: "#3F3D56",
    },
    palette: {
      primary: {
        main: "#007fff",
      },
    },
    mixins: {
      toolbar: {
        minHeight: "56px",
        "@media (min-width: 0px) and (orientation:landscape)": {
          minHeight: "50px",
        },
        "@media (min-width: 600px)": {
          minHeight: "64px",
        },
      },
    },
  });

  const socket = io.connect("http://localhost:3001");

  axios.post("http://localhost:5000/rooms");
  return (
    <>
      {
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              {/* Landing Page with Log in */}
              <Redirect exact from="/" to="/home/login" />
              <Redirect exact from="/home" to="/home/login" />
              <Route path="/forgotpassword" component={Forgot_password} />
              <Route path="/EmailVerification" component={EmailVerification} />
              <Route exact path="/home/:page?" component={Navbar_landingpage} />

              {/* Dashboard */}
              <ProtectedRoutes exact path="/dashboard" component={Dashboard} />

              {/* Rooms */}
              <ProtectedRoutes
                exact
                path="/rooms"
                component={Rooms}
                socket={socket}
              />
              <ProtectedRoutes
                exact
                path="/rooms/:roomID"
                component={Room_inside}
                socket={socket}
              />
              <ProtectedRoutes
                exact
                path="/rooms/:roomID/p/:activityID"
                component={View_activity}
                socket={socket}
              />
              <ProtectedRoutes
                exact
                socket={socket}
                path="/rooms/:roomID/s/:activityID"
                component={Activity_viewed}
              />

              {/* Quizlit */}
              <ProtectedRoutes exact path="/quizlit" component={QuizLit} />
              <ProtectedRoutes
                exact
                path="/quizlit/createquiz"
                component={Quizform}
              />
              <ProtectedRoutes
                exact
                path="/quizlit/createexam"
                component={Examform}
              />
              <ProtectedRoutes
                exact
                path="/examautosubmit"
                component={ExamAutosubmit}
              />

              <Route exact path="/quizlit/join">
                <JoinQuiz socket={socket} />
              </Route>
              <Route exact path="/quizlit/lobby">
                <Lobby socket={socket} />
              </Route>
              <Route exact path="/quizlit/lobby/:lobby/:name/:quizID">
                <ToLobby socket={socket} />
              </Route>

              {/* Telecon */}
              <ProtectedRoutes exact path="/telecon" component={TeleconStart} />

              <Route path="/telecon-setup">
                <TeleconLanding socket={socket} />
              </Route>
              <Route path="/telecon-group/:group?">
                <TeleconGroup socket={socket} />
              </Route>
              <Route path="/LiveQuiz/:roomID">
                <LiveQuizSetup socket={socket} />
              </Route>

              <Route path="/telecon/:teleRoom">
                <TeleconRoomV2 socket={socket} />
              </Route>
              <Route exact path="/quizgame/setup/:quizID">
                <QuizGameSetup socket={socket} />
              </Route>
              <Route exact path="/quiz-game/:quizID/:qIdx">
                <LivequizQuestion socket={socket} />
              </Route>
              <Route
                path="/LivequizStudentrankings"
                component={LivequizStudentrankings}
              />
              <ProtectedRoutes exact path="/records" component={Records} />
              <ProtectedRoutes
                exact
                path="/classcards"
                component={ClassCards_main}
              />

              {/* Setting */}
              <ProtectedRoutes exact path="/settings" component={Settings} />

              {/* Javen Routes */}
              <Route
                exact
                path="/Notifications_viewall"
                component={Notifications_viewall}
              />

              {/* Student Side */}
              <Route
                exact
                path="/Evaluation/:evalID"
                component={EvaluationV2}
              />

              <Route
                exact
                path="/ExamViewedV2/:quizID"
                component={ExamViewedV2}
              />
              <Route
                exact
                path="/quizlit/QuizViewedV2"
                component={QuizViewedV2}
              />
              <ProtectedRoutes
                exact
                path="/Exam_take/:quizID"
                component={Exam_take}
              />
              <ProtectedRoutes
                exact
                path="/Exam_start/:examID"
                component={Exam_start}
                socket={socket}
              />
              <ProtectedRoutes
                exact
                path="/ExamSubmitted"
                component={ExamSubmitted}
              />

              <ProtectedRoutes
                exact
                path="/ExamAutosubmit"
                component={ExamAutosubmit}
              />

              <ProtectedRoutes
                exact
                path="/quizlit/View_quiz"
                component={View_quiz}
              />
              <ProtectedRoutes
                exact
                path="/quizlit/ViewQuizV2"
                component={ViewQuizV2}
              />
              <ProtectedRoutes
                exact
                path="/quizlit/view_exam/:examID"
                component={View_exam}
              />
              <Route exact path="/quizlit/lobby">
                <Lobby socket={socket} />
              </Route>
              <Route exact path="/quizlit/lobby/:lobby/:name/:quizID">
                <ToLobby socket={socket} />
              </Route>
              <ProtectedRoutes socket={socket} />

              <Route component={Notfound} />
            </Switch>
          </Router>
        </ThemeProvider>
      }
    </>
  );
}

export default App;
