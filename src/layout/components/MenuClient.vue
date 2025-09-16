<template>
    <div class="nav-container primary-menu d-flex justify-content-between">
        <div class="mobile-topbar-header">
            <div>
                <img src="https://dzfullstack.com/assets/images/logo-img.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">CashFlow</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <div>
            <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/trang-chu">
                        <a class="nav-link" href="/trang-chu">
                            <div class="parent-icon"><i class='bx bx-home-circle'></i>
                            </div>
                            <div class="menu-title">Home</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/chi-tiet">
                        <a class="nav-link" href="/chi-tiet">
                            <div class="parent-icon"><i class="fa-solid fa-newspaper"></i>
                            </div>
                            <div class="menu-title">Chi Tiết</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/tour">
                        <a class="nav-link" href="/tour">
                            <div class="parent-icon"><i class="fa-solid fa-plane-departure"></i>
                            </div>
                            <div class="menu-title">Tour</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav> 
        </div>

       <div>
        <li class="nav-item">
                    <router-link to="/tour">
                        <a class="nav-link" href="/tour">
                            <div class="parent-icon"><i class="fa-solid fa-plane-departure"></i>
                            </div>
                            <div class="menu-title">DangNhap</div>
                        </a>
                    </router-link>
                </li>
       </div>

    </div>
</template>
<script>
export default {

}
</script>
<style></style>