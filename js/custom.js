// 在页面加载前就执行
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const loadingContainer = document.getElementById('loading-container');
    if (!loadingContainer) return;

    // 确保动画至少显示1秒
    setTimeout(function() {
      loadingContainer.classList.add('hide');
      setTimeout(function() {
        loadingContainer.style.display = 'none';
      }, 500);
    }, 1000);
  });

  // 如果页面加载太快也要显示动画
  window.addEventListener('load', function() {
    const loadingContainer = document.getElementById('loading-container');
    if (!loadingContainer || loadingContainer.classList.contains('hide')) return;
    
    loadingContainer.classList.add('hide');
    setTimeout(function() {
      loadingContainer.style.display = 'none';
    }, 500);
  });
})(); 