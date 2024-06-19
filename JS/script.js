const discussCard = document.getElementById('discuss-card');
let readCount = parseInt(document.getElementById('read-count').innerText);
const titleSection = document.getElementById('title-section');
const titleView = document.getElementById('title-view');
const view =document.getElementById('view');
const latestPostContainer = document.getElementById('latest-post-container');


const markRead =  () =>
{
    readCount++;
    setValueById('read-count', readCount);  
}


function setValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


const titleRead = (title ,  view_count) =>
{
    console.log(title , view_count);
    const h1 = document.createElement('h1');
    h1.className = 'text-xl font-semibold';
    h1.innerText = title;
    const titleView = document.createElement('div');
    titleView.className = "mb-4 bg-white rounded-2xl mt-5 p-3 flex gap-3";
    titleView.appendChild(h1);
    const view = document.createElement('div');
    view.className = "flex gap-2 justify-center items-center";
    titleView.appendChild(view);
    view.innerHTML = 
    `
    <img  src="images/tabler-icon-eye.png" />
    `
    const p = document.createElement('p');
    p.innerText = view_count; 
    view.appendChild(p);
    titleView.appendChild(view);
    titleSection.appendChild(titleView);
}


const showTitleAndViewCount =  ( title ,  view_count) =>
{
    markRead();
    titleRead( title , view_count);
    
}











const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const allPostData = data.posts;
    allPostData.forEach(postData => {


        const newPost = document.createElement("div");
        newPost.innerHTML = '';
        newPost.innerHTML = `
        <div
                        class="lg:p-10 p-2 flex gap-2 lg:gap-8 hover:bg-[#797DFC1A] bg-[#F3F3F5] border border-[#797DFC] rounded-3xl mt-10">

                        <div>

                        <div class="indicator">
                        <span class="indicator-item badge badge-${postData.isActive ? 'success' : 'error'}"></span> 
                        <div class="grid w-16 h-16 rounded-full bg-base-300 place-items-center"><img class="rounded-full" src=${postData.image} /></div>
                    </div>

                        </div>


                        <div class="space-y-3">
                            <div class="flex lg:gap-10 gap-5">
                                <p># ${postData.category}</p>
                                <p>Author : ${postData.author.name}</p>
                            </div>
                            <h1 class="font-bold text-2xl">${postData.title}</h1>
                            <p class="text-[#12132D99] border-b-2 border-dashed border-gray-400 pb-5"> ${postData.description}
                            </p>
                            <div class="flex justify-start gap-6 pt-6">
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>${postData.comment_count}</p>
                                </div>
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>${postData.view_count} </p>
                                </div>
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>${postData.posted_time} min</p>
                                </div>

                                <div class = "mark-as-read" >
                                <img   onclick= 'showTitleAndViewCount(("${postData.title.replace('\'', '')}"),(${postData.view_count}))' src="images/email 1.svg" />

                                </div>
                            </div>
                        </div>

                    </div>
        
        `

        discussCard.appendChild(newPost);


        // searchPostByCategory(postData.category);
        // console.log(postData.category);


    });
}






const loadDataAfterSearch = (data) => {



    const searchPost = data.posts
    discussCard.innerHTML = '';
    searchPost.forEach(post => {


        const newPost = document.createElement("div");
        newPost.innerHTML = `
        <div
                        class="lg:p-10 p-2 flex gap-2 lg:gap-8 hover:bg-[#797DFC1A] bg-[#F3F3F5] border border-[#797DFC] rounded-3xl mt-10">

                        <div>

                            

                            <div class="indicator">
                                <span class="indicator-item badge badge-${post.isActive ? 'success' : 'error'}"></span> 
                                <div class="grid w-16 h-16 rounded-full bg-base-300 place-items-center"><img class="rounded-full" src=${post.image} /></div>
                            </div>

                        </div>


                        <div class="space-y-3">
                            <div class="flex lg:gap-10 gap-5">
                                <p># ${post.category}</p>
                                <p>Author : ${post.author.name}</p>
                            </div>
                            <h1 class="font-bold text-2xl">${post.title}</h1>
                            <p class="text-[#12132D99] border-b-2 border-dashed border-gray-400 pb-5"> ${post.description}
                            </p>
                            <div class="flex justify-start gap-6 pt-6">
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>${post.comment_count}</p>
                                </div>
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>${post.view_count} </p>
                                </div>
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z"
                                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>${post.posted_time} min</p>
                                </div>

                                <div class = "mark-as-read" >
                                    <img   onclick= 'showTitleAndViewCount(("${post.title.replace('\'', '')}") , ${post.view_count})' src="images/email 1.svg" />

                                </div>
                            </div>
                        </div>

                    </div>
        
        `

        discussCard.appendChild(newPost);

    });


    setTimeout(() => {
        toggleLoadingSpinner(false)
    }, 2000);


}






const searchPostByCategory = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    loadDataAfterSearch(data);
}


const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchPostByCategory(searchText);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden')
    }
}

loadData();



const latestPost = async () =>
{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    data.forEach(post => {

        const newPost = document.createElement('div');
        newPost.innerHTML = 
        `
        <div
        class="card card-compact lg:h-96 lg:w-96 bg-base-100 shadow-xl p-6 border border-[#12132D26] rounded-3xl">
        <figure><img class="h-24" src=${post.cover_image} /></figure>
        <div class="card-body">
            <div class="flex gap-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <g clip-path="url(#clip0_29_1881)">
                        <path
                            d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M16 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 11H20" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z"
                            stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_29_1881">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p class="text-gray-600">${!post.author.posted_date? 'No publish date' : post.author.posted_date}</p>
                <p id="no-publish-date" class="hidden text-gray-600">No publish date</p>
            </div>

            <h1 class="text-xl font-extrabold">${post.title}</h1>
            <p>${post.description}</p>

            <div class="flex gap-5">
                <div class="avatar">
                    <div class="w-10 rounded-full">
                        <img src=${post.profile_image} />
                    </div>
                </div>
                <div>
                    <p class="text-xl font-bold">${post.author.name}</p>
                    <p>${!post.author.designation? 'Unknown' : post.author.designation}</p>
                </div>
            </div>
        </div>

    </div>
        `

        latestPostContainer.appendChild(newPost);
        
    });
}

latestPost();