<template>
    <header class="flex items-center bg-black w-full border-state-200 py-2">
        <div class="container">
            <div class="flex justify-between items-center">
                <div class="gap-6 px-4">
                    <NuxtLink to="/" class="flex items-center text-white text-2xl font-semibold">
                        <img src="/assets/images/logo.png" class="h-12 w-12 gap-6" alt="">
                        <span>PORTOFOLIO</span>
                    </NuxtLink>
                </div>
                <nav class="flex items-center gap-6">
                    <NuxtLink to="/" class="text-base text-white">Home</NuxtLink>
                    <NuxtLink to="/product" class="text-base text-white">Product</NuxtLink>
                    <NuxtLink to="/about" class="text-base text-white">About</NuxtLink>
                    <NuxtLink to="/cart" class="text-base text-white">cart</NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>