"use client";

import {useEffect} from "react";

async function fetchGHrepos() {
    console.log("got to here")
    const url = `https://api.github.com/users/old0men/repos`;

    try {

        const response = await fetch(url)
        console.log("also got to here")
        const repos = await response.json()
        const container = document.getElementsByClassName("repo")[0]

        repos.forEach(repo => {
            const new_repo_div = document.createElement("div")
            new_repo_div.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank" class="repo_name">${repo.name}</a></h3>
                <p class="repo_description">${repo.description || "No description available"}</p>
                `;
            container.appendChild(new_repo_div)
        })

    } catch (error) {
        console.error("fetching error")
    }
}

export default function project_list() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchGHrepos();
    }, []);

    return (
        <div className={"project_list_page"}>
            <h1 className={"project_list_title"}>project list</h1>
            <div className={"repo"}></div>
        </div>
    )
}