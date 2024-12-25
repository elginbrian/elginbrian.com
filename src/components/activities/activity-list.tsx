import Polaroid from "./polaroid";

const activities = [
  {
    imageUrl: "/activity/farewell.jpg",
    description: "Farewell Raion 2024",
    date: "December 19, 2024",
  },
  {
    imageUrl: "/activity/sj4.JPG",
    description: "#TechSeries Android",
    date: "November 21, 2024",
  },
  {
    imageUrl: "/activity/fg.jpg",
    description: "FG GDGOC 2024",
    date: "November 3, 2024",
  },
  {
    imageUrl: "/activity/compfest.JPG",
    description: "GN Academy COMPFEST-16",
    date: "September 14, 2024",
  },
  {
    imageUrl: "/activity/hackjam.jpg",
    description: "Raion Hackjam 2024",
    date: "September 1, 2024",
  },
  {
    imageUrl: "/activity/ssg.jpg",
    description: "SSG x Hackfest UC 2024",
    date: "April 28, 2024",
  },
  {
    imageUrl: "/activity/internship.jpg",
    description: "Raion Internship 2024",
    date: "April 2024",
  },
  {
    imageUrl: "/activity/inau.jpg",
    description: "Inaugurasi PKKMB & SA 2023",
    date: "November 26, 2023",
  },
  {
    imageUrl: "/activity/fd.jpg",
    description: "First Day in College",
    date: "August 23, 2023",
  },
];

const ActivityList: React.FC = () => {
  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-12 
        pl-6 pr-6 pt-32 pb-28 
        md:pl-12 md:pr-32 md:pt-28 
        lg:pl-12 lg:pb-12
      "
    >
      {activities.map((activity, index) => (
        <div key={index} className="flex flex-row w-full justify-center">
          <Polaroid imageUrl={activity.imageUrl} description={activity.description} date={activity.date} />
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
