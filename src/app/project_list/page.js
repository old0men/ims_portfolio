"use client";
import {useEffect} from "react";
import Link from "next/link";

async function fetch_github_repos() {
    const url = `https://api.github.com/users/old0men/repos`;
    try {
        const response = await fetch(url)
        const repos = await response.json()
        const container = document.getElementsByClassName("repo")[0]
        let post_list = [repos[0]];


        repos.forEach(repo => {
            if (repo === repos[0]) {}
            else if (repo.name !== "sub_atomical_simulator") {
                console.log(repo.name)
                post_list.push(repo)
            } else {
                const new_repo_div = document.createElement("div")
                new_repo_div.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank" class="repo_name">${repo.name}</a></h3>
                <p class="repo_description">${repo.description || "No description available"}</p>
                `;
                container.appendChild(new_repo_div)
            }
        })

        post_list.forEach(repo => {
            const new_repo_div = document.createElement("div")
            new_repo_div.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank" class="repo_name">${repo.name}</a></h3>
            <p class="repo_description">${repo.description || "No description available"}</p>
            `;
            container.appendChild(new_repo_div)
        })


    } catch (error) {
        console.error(error)
    }
}

export default function project_list() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch_github_repos();
    }, []);

    return (
        <div className={"project_list_page"}>
            <Link className={"page_back_project_list"} href={"./"}>⋖</Link>
            <h1 className={"project_list_title"}>project list</h1>
            <div className={"repo"}></div>
        </div>
    )
}