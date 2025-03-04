// 动态加载产品卡片
const products = [
    {
        title: '智能决策系统',
        icon: 'fa-brain',
        description: '基于机器学习的商业决策支持平台'
    },
    {
        title: '自然语言处理',
        icon: 'fa-comments',
        description: '多语言文本分析与语义理解引擎'
    },
    {
        title: '计算机视觉',
        icon: 'fa-eye',
        description: '工业级图像识别与视频分析解决方案'
    }
];

function loadProducts() {
    const container = document.querySelector('#products .row');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card product-card h-100">
                <div class="card-body text-center">
                    <i class="fas ${product.icon} fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
