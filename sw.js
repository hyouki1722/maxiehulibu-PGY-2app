const CACHE_NAME = 'nursing-guide-v1';

// 當 Service Worker 被安裝時觸發
self.addEventListener('install', (event) => {
    // skipWaiting() 強制等待中的 Service Worker 成為 active 狀態
    self.skipWaiting();
});

// 當 Service Worker 被啟動時觸發
self.addEventListener('activate', (event) => {
    // 取得客戶端的控制權，確保立刻生效
    event.waitUntil(self.clients.claim());
});

// 攔截網路請求 (目前我們不阻擋或快取，直接放行連線以確保永遠拿到最新版)
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});