import { useState } from "react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Изумрудный Village",
      category: "1",
      image: img1,
    },
    {
      id: 2,
      title: "IQ CLUB",
      category: "2",
      image: img2,
    },
    {
      id: 3,
      title: "Дома в Зимней Горке",
      category: "town",
      image: img3,
    },
    {
      id: 4,
      title: "Usadby Village",
      category: "2",
      image: img4,
    },
  ];

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <section className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl mb-5">
        Наши <span className="text-orange-500">проекты</span>
      </h1>

      <div className="flex gap-3 flex-wrap mb-8">
        <button onClick={() => setFilter("1")}>1 комнат</button>
        <button onClick={() => setFilter("2")}>2 комнаты</button>
        <button onClick={() => setFilter("town")}>Таунхаус</button>
        <button onClick={() => setFilter("all")}>Все дома</button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[280px] object-cover"
            />

            <h2 className="mt-3 text-xl font-bold">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}