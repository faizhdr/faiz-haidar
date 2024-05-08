import { BootstrapIcon, GithubIcon, LaravelIcon, NextJSIcon, ReactJSIcon, TailwindIcon } from "./icons";
export const Projects = {
    data : [
        {
            id: 1,
            title: "Dabelyuland",
            subtitle : "Dabelyuland Indonesia",
            tech : "React, Next JS, Tailwind",
            icon : [ReactJSIcon, NextJSIcon, TailwindIcon],
            image: "/projects/dabelyuland-indonesia.png",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 2,
            title: "Siwikoja",
            subtitle : "Sistem Wisata Kota Jakarta",
            tech : "Bootstrap",
            icon : [BootstrapIcon],
            image: "/projects/siwikoja.png",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 3,
            title: "Wildrift",
            subtitle : "Wildrift Gameplay",
            tech : "React, Bootstrap",
            icon : [ReactJSIcon ,BootstrapIcon],
            image: "/projects/wildrift.png",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
    ]
};

export const stack = {
    item : [
        {
            icon : GithubIcon
        }
    ]
}