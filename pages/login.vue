<template>
  <div class="bg-[#DDDDDD] h-lvh">
    <navbar />

    <div class="flex h-lvh w-full justify-center items-center">
      <div class="flex flex-col lg:flex-row-reverse lg:w-3/5 w-[90%] h-[60%] shadow-lg border border-gray-400 rounded-4xl">
        <img src="/img/login-placeholder.png" alt="" class="sm:rounded-t-4xl lg:rounded-r-4xl h-[40%] lg:h-full lg:w-2/5">
        <div class="lg:w-3/5 h-[60%] lg:h-full bg-[#1E1E1E] sm:rounded-b-4xl lg:rounded-br-none lg:rounded-l-4xl flex flex-col lg:p-12 p-4 justify-evenly">
          <div class="flex flex-col space-y-2">
            <h1 class="text-xl lg:text-2xl">Login to Your Account</h1>
            <p>Admin Access Only</p>
          </div>
          <div class="flex flex-col space-y-4 lg:space-y-2 sm:pt-2">
            <label for="email" class="hidden lg:flex">Email</label>
            <input type="email" name="" id="" class="p-2 w-full outline-white outline-1 rounded-2xl" placeholder="Email"/>
            <label for="password" class="hidden lg:flex">Password</label>
            <input type="password" name="" id="" class="p-2 w-full outline-white outline-1 rounded-2xl" placeholder="Password"/>
          </div>
          <a href="" class="flex border border-white w-fit px-6 py-2 rounded-full justify-center items-center space-x-4 mt-2 hover:bg-gray-300/50 hover:delay-150">
            <p>Login</p>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.75 19.75V17.5833H2.91667V2.41667C2.91667 1.82083 3.129 1.31094 3.55367 0.887C3.97833 0.463056 4.48822 0.250722 5.08333 0.25H15.9167C16.5125 0.25 17.0228 0.462333 17.4474 0.887C17.8721 1.31167 18.0841 1.82156 18.0833 2.41667V17.5833H20.25V19.75H0.75ZM15.9167 17.5833V2.41667H5.08333V17.5833H15.9167ZM12.6667 11.0833C12.9736 11.0833 13.2311 10.9793 13.4391 10.7713C13.6471 10.5633 13.7507 10.3062 13.75 10C13.7493 9.69378 13.6453 9.43667 13.438 9.22867C13.2307 9.02067 12.9736 8.91667 12.6667 8.91667C12.3597 8.91667 12.1026 9.02067 11.8953 9.22867C11.6881 9.43667 11.5841 9.69378 11.5833 10C11.5826 10.3062 11.6866 10.5637 11.8953 10.7724C12.1041 10.9811 12.3612 11.0848 12.6667 11.0833Z"
                fill="#FFFBFC"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
