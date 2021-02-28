import socialWebImg from "../utils/imgs/projects/socail_web.png"
import stopWatcherImg from "../utils/imgs/projects/stop_watcer.png"
import projectPhoto from "../utils/imgs/projects/prject_photo.jpg"


export const data = {
	projects: [
		{
			pId: 1,
			pName: "stop watcher app:",
			path: "https://rwin321.github.io/stopwatcher/",
			pDescp: "Simple designed stop watcher app with wait (need to double tap), stop/start and reset btn",
			pImg: stopWatcherImg,
			pClass: ""
		},
		{
			pId: 2,
			pName: "social web:",
			path: "https://rwin321.github.io/rwin_react/",
			pDescp: "my pet project, where I used a lot of libraries, including React, Redux, react-redux, react-router-dom, redux-form and etc.",
			pImg: socialWebImg,
			pClass: ""
		},
		{
			pId: 3,
			pName: "sidebar menu navigation",
			path: "https://rwin321.github.io/side_bar_nav/",
			pDescp: "in this mini-project I used simple header with dynamic sidebar",
			pImg: projectPhoto,
			pClass: ""
		}
		/*{
			pId: 4,
			pName: "",
			path: "",
			pDescp: "",
			pImg: "",
			pClass: ""
		}*/
	]
}