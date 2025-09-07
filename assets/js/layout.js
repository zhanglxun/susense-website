(function() {
  // 内联HTML模板，避免CORS问题
  const headerTemplate = `
    <div class="container ">
      <a class="navbar-brand" href="index.html">
        <img src="assets/img/brand-su.svg" class="navbar-brand-img" alt="速睿森视">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fe fe-x"></i>
        </button>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="index.html">首页</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarPages" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">产品与服务</a>
            <div class="dropdown-menu dropdown-menu-lg" aria-labelledby="navbarPages">
              <div class="row no-gutters">
                <div class="col-4 col-lg-4">
                  <h6 class="dropdown-header mb-5">企业中台</h6>
                  <a class="dropdown-item mb-3" href="case-business.html">业务中台</a>
                  <a class="dropdown-item mb-3" href="case-data.html">数据中台</a>
                  <a class="dropdown-item mb-3" href="case-ai.html">AI中台</a>
                </div>
                <div class="col-5 col-lg-5">
                  <h6 class="dropdown-header mb-5">研发平台</h6>
                  <a class="dropdown-item mb-3" href="case-devops.html">研发效能平台<br>(DevOps)</a>
                  <a class="dropdown-item mb-3" href="case-tech.html">基础技术平台<br>(Tech)</a>
                </div>
                <div class="col-3 col-lg-3">
                  <h6 class="dropdown-header mb-5">产品支持</h6>
                  <a class="dropdown-item mb-3" href="tech-doc.html">技术文档</a>
                  <a class="dropdown-item mb-3" href="blog-post.html">更新日志</a>
                  <a class="dropdown-item mb-3" href="blog-showcase.html">文档下载</a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarSolution" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">解决方案</a>
            <div class="dropdown-menu dropdown-menu-md" aria-labelledby="navbarSolution">
              <div class="list-group list-group-flush">
                <a class="list-group-item" href="solution1.html">
                  <div class="icon icon-sm text-primary">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24"></rect>
                        <path d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z" fill="#335EEA" opacity="0.3"></path>
                        <path d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z" fill="#335EEA"></path>
                        <rect fill="#335EEA" opacity="0.3" x="7" y="10" width="5" height="2" rx="1"></rect>
                        <rect fill="#335EEA" opacity="0.3" x="7" y="14" width="9" height="2" rx="1"></rect>
                      </g>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-primary mb-0">电商零售方案</h6>
                    <p class="font-size-sm text-gray-700 mb-0">电商零售行业解决方案</p>
                  </div>
                </a>
                <a class="list-group-item" href="solution2.html">
                  <div class="icon icon-sm text-primary">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24"></rect>
                        <rect fill="#335EEA" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                        <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#335EEA" opacity="0.3"></path>
                      </g>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-primary mb-0">珠宝分销行业方案</h6>
                    <p class="font-size-sm text-gray-700 mb-0">珠宝行业分销及零售的行业方案</p>
                  </div>
                </a>
                <a class="list-group-item" href="solution3.html">
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
                    <h6 class="font-weight-bold text-uppercase text-primary mb-0">智慧制造方案</h6>
                    <p class="font-size-sm text-gray-700 mb-0">智慧制造行业技术方案</p>
                  </div>
                  <span class="badge badge-pill badge-primary-soft ml-auto">1.0.0</span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarnews" href="news.html">客户案例</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="about.html">关于我们</a>
          </li>
        </ul>
        <a class="navbar-btn btn btn-sm btn-primary lift btn-sm ml-auto" href="" target="_blank">登录</a>
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
          <h6 class="font-weight-bold text-uppercase text-gray-700">产品和服务</h6>
          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li class="mb-3"><a href="case-business.html" class="text-reset">业务中台</a></li>
            <li class="mb-3"><a href="case-data.html" class="text-reset">数据中台</a></li>
            <li class="mb-3"><a href="case-ai.html" class="text-reset">AI中台</a></li>
            <li class="mb-3"><a href="case-devops.html" class="text-reset">研发效能平台</a></li>
            <li class="mb-3"><a href="case-tech.html" class="text-reset">基础技术平台</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="font-weight-bold text-uppercase text-gray-700">典型案例</h6>
          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li class="mb-3"><a href="solution1.html" class="text-reset">零售解决方案</a></li>
            <li class="mb-3"><a href="solution2.html" class="text-reset">珠宝分销行业方案</a></li>
            <li class="mb-3"><a href="solution3.html" class="text-reset">智能制造方案</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
          <h6 class="font-weight-bold text-uppercase text-gray-700">帮助与支持</h6>
          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-3"><a target="_blank" href="contact.html" class="text-reset">合作咨询</a></li>
            <li class="mb-3"><a target="_blank" href="tech-doc.html" class="text-reset">技术文档</a></li>
            <li class="mb-3"><a href="news.html" class="text-reset">新闻资讯</a></li>
            <li class="mb-3"><a href="log.html" class="text-reset">更新日志</a></li>
            <li class="mb-3"><a href="#" class="text-reset">文档下载</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="font-weight-bold text-uppercase text-gray-700">关于我们</h6>
          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-3"><a href="about.html" class="text-reset">关于我们</a></li>
            <li class="mb-3"><a href="about.html" class="text-reset">企业文化</a></li>
            <li class="mb-3"><a href="about.html" class="text-reset">加入我们</a></li>
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
    } catch (e) {
      console.warn('Layout injection failed:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();


