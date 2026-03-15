(function () {
  // 内联HTML模板，避免CORS问题
  const headerTemplate = `
    <div class="container ">
      <a class="navbar-brand" href="index.html">
        <img src="assets/img/brand-su.png" class="navbar-brand-img" alt="速睿森视">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fe fe-x"></i>
        </button>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">首页</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarServices" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">服务与方案</a>
            <div class="dropdown-menu dropdown-menu-lg" aria-labelledby="navbarServices" style="min-width: 580px;">
              <div class="row no-gutters">
                <div class="col-6 col-lg-6">
                  <h6 class="dropdown-header text-uppercase text-primary">服务</h6>
                  <div class="list-group list-group-flush">
                    <a class="list-group-item" href="service-software.html">
                      <div class="icon icon-sm text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.325 3.05L8.667 20.432l1.932.518 4.658-17.382-1.932-.518zM7.612 18.36l1.36-1.448-4.16-3.912 4.16-3.91-1.36-1.45-5.5 5.36 5.5 5.36zM16.388 18.36l5.5-5.36-5.5-5.36-1.36 1.45 4.16 3.91-4.16 3.912 1.36 1.448z" fill="#335EEA"/>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <h6 class="font-weight-bold text-uppercase text-primary mb-0">软件系统开发</h6>
                        <p class="font-size-sm text-gray-700 mb-0">企业级系统定制开发</p>
                      </div>
                    </a>
                    <a class="list-group-item" href="service-design.html">
                      <div class="icon icon-sm text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#335EEA" opacity="0.3"/>
                          <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z" fill="#335EEA"/>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <h6 class="font-weight-bold text-uppercase text-primary mb-0">产品体验设计</h6>
                        <p class="font-size-sm text-gray-700 mb-0">APP与产品体验优化</p>
                      </div>
                    </a>
                    <a class="list-group-item" href="service-ai.html">
                      <div class="icon icon-sm text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12z" fill="#335EEA"/>
                          <path d="M12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" fill="#335EEA" opacity="0.3"/>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <h6 class="font-weight-bold text-uppercase text-primary mb-0">AI 赋能服务</h6>
                        <p class="font-size-sm text-gray-700 mb-0">AI培训与Agent落地</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-6 col-lg-6">
                  <h6 class="dropdown-header text-uppercase text-primary">方案</h6>
                  <div class="list-group list-group-flush">
                    <a class="list-group-item" href="solution-healthcare.html">
                      <div class="icon icon-sm text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" fill="#335EEA"/>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <h6 class="font-weight-bold text-uppercase text-primary mb-0">医疗健康</h6>
                        <p class="font-size-sm text-gray-700 mb-0">健康管理与数字疗法</p>
                      </div>
                    </a>
                    <a class="list-group-item" href="#">
                      <div class="icon icon-sm text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="#335EEA"/>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <h6 class="font-weight-bold text-uppercase text-primary mb-0">智能制造</h6>
                        <p class="font-size-sm text-gray-700 mb-0">生产数字化转型</p>
                      </div>
                    </a>
                    <a class="list-group-item" href="solution-attention.html">
                      <div class="icon icon-sm text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#335EEA"/>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <h6 class="font-weight-bold text-uppercase text-primary mb-0">注意力培训</h6>
                        <p class="font-size-sm text-gray-700 mb-0">青少年认知能力训练</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarProducts" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">产品系列</a>
            <div class="dropdown-menu dropdown-menu-md" aria-labelledby="navbarProducts">
              <div class="list-group list-group-flush">
                <a class="list-group-item" href="solution-digitalloom.html">
                  <div class="icon icon-sm text-primary">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#335EEA" opacity="0.3"></path>
                        <rect fill="#335EEA" x="6" y="11" width="9" height="2" rx="1"></rect>
                        <rect fill="#335EEA" x="6" y="15" width="5" height="2" rx="1"></rect>
                      </g>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-primary mb-0">数智织机</h6>
                    <p class="font-size-sm text-gray-700 mb-0">中小服装制造数字化产品</p>
                  </div>
                  <span class="badge badge-pill badge-primary-soft ml-auto">1.0.0</span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="news.html">客户案例</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">关于我们</a>
          </li>
        </ul>
        <a class="navbar-btn btn btn-sm btn-primary lift ml-auto" href="contact.html">联系我们</a>
      </div>
    </div>
  `;

  const footerTemplate = `
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <img src="assets/img/brand-su.svg" alt="..." class="footer-brand img-fluid mb-2">
          <p class="text-gray-700 mb-2">联系我们</p>
          <ul class="list-unstyled list-inline list-social mb-6 mb-md-0">
            <li class="list-inline-item list-social-item mr-3">
              <a href="#" class="text-decoration-none">
                <img src="assets/img/icons/social/instagram.svg" class="list-social-icon" alt="...">
              </a>
            </li>
            <li class="list-inline-item list-social-item mr-3">
              <a href="#" class="text-decoration-none">
                <img src="assets/img/icons/social/facebook.svg" class="list-social-icon" alt="...">
              </a>
            </li>
            <li class="list-inline-item list-social-item mr-3">
              <a href="#" class="text-decoration-none">
                <img src="assets/img/icons/social/twitter.svg" class="list-social-icon" alt="...">
              </a>
            </li>
            <li class="list-inline-item list-social-item">
              <a href="#" class="text-decoration-none">
                <img src="assets/img/icons/social/pinterest.svg" class="list-social-icon" alt="...">
              </a>
            </li>
          </ul>
          <br>
          <p class="text-gray-700 mb-2"><span>13266680807</span></p>
          <p class="text-gray-700 mb-2">
            <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备19105210号</a>
          </p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="font-weight-bold text-uppercase text-gray-700">服务</h6>
          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li class="mb-3"><a href="service-software.html" class="text-reset">软件系统开发</a></li>
            <li class="mb-3"><a href="service-design.html" class="text-reset">产品体验设计</a></li>
            <li class="mb-3"><a href="service-ai.html" class="text-reset">AI 赋能服务</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="font-weight-bold text-uppercase text-gray-700">方案</h6>
          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li class="mb-3"><a href="solution-healthcare.html" class="text-reset">医疗健康</a></li>
            <li class="mb-3"><a href="#" class="text-reset">智能制造</a></li>
            <li class="mb-3"><a href="solution-attention.html" class="text-reset">注意力培训</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
          <h6 class="font-weight-bold text-uppercase text-gray-700">产品与案例</h6>
          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-3"><a href="solution-digitalloom.html" class="text-reset">数智织机</a></li>
            <li class="mb-3"><a href="news.html" class="text-reset">客户案例</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="font-weight-bold text-uppercase text-gray-700">关于我们</h6>
          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-3"><a href="about.html" class="text-reset">公司介绍</a></li>
            <li class="mb-3"><a href="contact.html" class="text-reset">联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>
  `;

  function inject() {
    try {
      // 注入header
      const headerEl = document.getElementById('header');
      if (headerEl) {
        headerEl.innerHTML = headerTemplate;
      }

      // 注入footer
      const footerEl = document.getElementById('footer');
      if (footerEl) {
        footerEl.innerHTML = footerTemplate;
      }

      // 初始化导航固定功能
      initStickyNavbar();
    } catch (e) {
      console.warn('Layout injection failed:', e);
    }
  }

  // 导航固定功能
  function initStickyNavbar() {
    const navbar = document.getElementById('header');
    if (!navbar) return;

    // 添加过渡效果的样式
    navbar.style.transition = 'all 0.3s ease-in-out';

    let lastScrollTop = 0;
    let ticking = false;

    function updateNavbar() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 50) {
        // 滚动超过50px时,固定导航
        navbar.classList.add('navbar-stuck');
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.zIndex = '1030';
        navbar.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
      } else {
        // 回到顶部时,恢复原样
        navbar.classList.remove('navbar-stuck');
        navbar.style.position = '';
        navbar.style.top = '';
        navbar.style.left = '';
        navbar.style.right = '';
        navbar.style.zIndex = '';
        navbar.style.boxShadow = '';
      }

      lastScrollTop = scrollTop;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }

    // 监听滚动事件
    window.addEventListener('scroll', onScroll, { passive: true });

    // 初始检查
    updateNavbar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();


